import React from "react";
import {Text,View,TouchableOpacity} from 'react-native'
import { getEnvVars } from "../../Environment";
import { login } from "../../api/loginApi";
import PersistentStorageActions from "../../stores/actions/PersistentStorageActions";
import { connectToRedux } from "../../utils/ReduxConnect";
const LoginScreen = ({setToken}) =>{

    const LoginHandle = () =>{
        login({userName:'hung.ngo',password:'ABCabc0708@'}).then(data =>{
            console.log(data)
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
        <View>
            <TouchableOpacity
            onPress={LoginHandle}
            >
                <Text>
                    Login
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
    },
  });