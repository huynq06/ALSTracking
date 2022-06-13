import React from "react";
import {Text,View,TouchableOpacity} from 'react-native'
import { getEnvVars } from "../../Environment";
import { login } from "../../api/loginApi";
import { getTenant } from "../../api/loginApi";
import PersistentStorageActions from "../../stores/actions/PersistentStorageActions";
import { connectToRedux } from "../../utils/ReduxConnect";
const LoginScreen = ({setToken,setTenant}) =>{
    const SetTenantHandle = () =>{
        getTenant('ALSW_UAT').then(({ success, ...data }) => {
            console.log('getTenant###########################',data)
            setTenant(data);
            //toggleTenantSelection();
          });
    }
    const RemoveTenantHandel = () =>{
        setTenant({})
    }
    const LoginHandle = () =>{
      
        login({userName:'hung.ngo',password:'ABCabc0708@'}).then(data =>{
            console.log('data$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',data)
            setToken({
                "access_token": "",
                "expires_in": 31536000,
                "token_type": "Bearer",
                "refresh_token": "",
                "expire_time": new Date().valueOf() + 31536000,
                "scope": undefined,
            })
        }).catch((e)=>{
            console.log('Exception Login',e)
        })
    }
    return(
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
               <TouchableOpacity
            onPress={SetTenantHandle}
            >
                <Text style={{
                    fontSize:24
                }}>
                    SetTenant
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={LoginHandle}
            >
                <Text style={{
                    fontSize:24
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={RemoveTenantHandel}
            >
                <Text style={{
                    fontSize:24
                }}>
                    Remove Tenant
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default connectToRedux({
    component: LoginScreen,
    stateProps: state => ({
    }),
    dispatchProps: {
      setToken: PersistentStorageActions.setToken,
      setTenant: PersistentStorageActions.setTenant,
    },
  });