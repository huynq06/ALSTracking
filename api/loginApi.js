import api from './API'
import { getEnvVars } from '../Environment'
const {oAuthConfig} = getEnvVars();

export const login = ({userName,password}) =>
api({
    method: 'POST',
    url: '/api/account/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "userNameOrEmailAddress": userName,
      "password": password,
      "rememberMe": true,
      "tenanId": null
    },
    baseURL: oAuthConfig.issuer,
  }).then(({data}) => data);
export const register = ({userName,emailAddress,password}) =>
api({
    method: 'POST',
    url: '/api/account/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "userName": userName,
      "emailAddress": emailAddress,
      "password": password,
    },
    baseURL: oAuthConfig.issuer,
  }).then(({data}) => data);
// export const login = ({ username, password }) =>
//   api({
//     method: 'POST',
//     url: '/connect/token',
//     headers: {  'Content-Type': 'application/json', },
//     data: `grant_type=password&scope=${oAuthConfig.scope}&username=${username}&password=${password}&client_id=${oAuthConfig.clientId}&client_secret=${oAuthConfig.clientSecret}`,
//     baseURL: oAuthConfig.issuer,
//   }).then(({ data }) => data);
  export const logout = () =>
  api({
    method: 'GET',
    url: '/api/account/logout',
  }).then(({data}) => data).catch(data => data);

  export const getTenant = tenantName =>
  api({
    method: 'GET',
    url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
  }).then(({ data }) => data);

export const getTenantById = tenantId =>
  api({
    method: 'GET',
    url: `/api/abp/multi-tenancy/tenants/by-id/${tenantId}`,
  }).then(({ data }) => data);
