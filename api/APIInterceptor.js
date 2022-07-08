import api from './API'
import { parseCookie } from '../utils/Cookies'
import PersistentStorageActions from '../stores/actions/PersistentStorageActions'
import LoadingActions from '../stores/actions/LoadingActions';
import { Alert } from 'react-native';
export function initAPIInterceptor(store) {
  api.interceptors.request.use(
    async request => {
      const {
        persistentStorage: { token, language, tenant },
      } = store.getState();

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
        request.headers.__tenant = tenant.tenantId;
      }

      return request;
    },
    error => console.error(error),
  );

  api.interceptors.response.use(
    response => response,
    error => {
      store.dispatch(LoadingActions.clear());
      const errorRes = error.response;
      if (errorRes) {
        if (errorRes.headers._abperrorformat && errorRes.status === 401) {
          store.dispatch(PersistentStorageActions.setToken({}));
        }

        showError({ error: errorRes.data.error || {}, status: errorRes.status });
      } else {
        console.log('An unexpected error has occurred')
      }

      return Promise.reject(error);
    },
  );
}
  function showError({error = {}, status}) {
    // console.log('APII90', error, status);
    let message = '';
    let title = 'DefaultErrorMessage';
  
    if (typeof error === 'string') {
      // message = error;
      message = 'Network error';
    } else if (error.details) {
      // message = error.details;
      message = error.message;
      title = 'Error details:';
    } else if (error.message) {
      message = 'Network error with message';
      // message = error.message;
    } else {
      switch (status) {
        case 401:
          title = 'DefaultErrorMessage401';
          message ='DefaultErrorMessage401Detail';
          break;
        case 403:
          title = 'DefaultErrorMessage403';
          message = 'DefaultErrorMessage403Detail';
          break;
        case 404:
          title = 'DefaultErrorMessage404';
          message = 'DefaultErrorMessage404Detail';
          break;
        case 500:
          title = '500Message';
          message = 'InternalServerErrorMessage';
          break;
        default:
          break;
      }
    }
  console.log( `${title}\n${message}`)
  }