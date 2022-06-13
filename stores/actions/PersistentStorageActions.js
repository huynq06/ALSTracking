import {createAction} from '@reduxjs/toolkit'

const setVerifyToken = createAction('persistentStorage/setVerifyToken');
const setToken = createAction('persistentStorage/setToken')
const setTenant = createAction('persistentStorage/setTenant');

export default {
    setVerifyToken,
    setToken,
    setTenant,
}