import api from './API'
import { parseCookie } from '../utils/Cookies'
import PersistentStorageActions from '../stores/actions/PersistentStorageActions'

export function initAPIInterceptor(store) {
    api.interceptors.request.use(
      async request => {
        const {
          persistentStorage: {token, language, tenant, verifyToken},
        } = store.getState();
        if (!request.headers.RequestVerificationToken && verifyToken) {
          request.headers.RequestVerificationToken = verifyToken;
        }
  
        if (!request.headers.Authorization && token && token.access_token) {
          request.headers.Authorization = `${token.token_type} ${token.access_token}`;
        }
  
        if (!request.headers['Content-Type']) {
          request.headers['Content-Type'] = 'application/json';
        }
  
        if (!request.headers['Accept-Language'] && language) {
          request.headers['Accept-Language'] = language;
        }
  
        if (!request.headers.__tenant && tenant && tenant.tenantId) {
          console.log('da chay vao header tenant :) :) :) :) :)');
          request.headers.__tenant = tenant.tenantId;
        }
        console.log('request_________________________________',request)
        return request;
      },
      error => console.error(error),
    );
  
    api.interceptors.response.use(
      (response) => {
        // console.log('rs', response);
        try {
          const {headers} = response;
          let cookies = headers['set-cookie'];
          if (cookies && cookies.length > 0) cookies = cookies[0].split(',');
          if (!cookies || !cookies.length) cookies = [];
          let cookieTmp = '';
          for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].indexOf('XSRF-TOKEN') >= 0) cookieTmp = cookies[i];
          }
          let cookieObject = parseCookie(cookieTmp);
          if (cookieObject["XSRF-TOKEN"]) {
            // console.log(55, cookieObject["XSRF-TOKEN"]);
            store.dispatch(PersistentStorageActions.setVerifyToken(cookieObject["XSRF-TOKEN"]));
          }
        } catch (e) {
          console.log('APIC58', e.toString());
        }
        //console.log('response----------------------------------------------',response)
        return response;
      },
      error => {
         console.log('re', error);
        // store.dispatch(LoadingActions.clear());
        // const errorRes = error.response;
        // if (errorRes) {
        //   if (errorRes.headers._abperrorformat && errorRes.status === 401) {
        //     store.dispatch(PersistentStorageActions.setToken({}));
        //   }
  
        //   showError({error: errorRes.data.error || {}, status: errorRes.status});
        // } else {
        //   Toast.show({
        //     text: 'An unexpected error has occurred',
        //     buttonText: 'x',
        //     duration: 10000,
        //     type: 'danger',
        //     textStyle: {textAlign: 'center'}, swipeDisabled: true
        //   });
        // }
  
        // return Promise.reject(error);
      },
    );
  }