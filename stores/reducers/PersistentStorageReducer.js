import {createReducer} from '@reduxjs/toolkit'
import PersistentStorageActions from '../actions/PersistentStorageActions'
import { isTokenValid } from '../../utils/TokenUtils'

const inititalState = {
    config:{apiUrl:''},
    "currentUser": {
        "isAuthenticated": null,
        "id": "",
        "tenantId": null,
        "userName": "",
        "name": "",
        "surName": null,
        "email": "",
        "emailVerified": null,
        "phoneNumber": null,
        "phoneNumberVerified": null,
        "roles": [],
        "password": "",
      },
      token: {}, language: null, tenant: {}
}


export default createReducer(inititalState,builder =>
    builder
    .addCase(PersistentStorageActions.setToken,(state,action)=>{
        if(!isTokenValid(action.payload)){
            const oldUserId = state?.currentUser?.id;
            const oldTenant = state.tenant;
        }
        state.token = action.payload;
    })
    )