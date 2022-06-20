import React,{useState,useMemo,useEffect} from "react";
import {View,Text,PermissionsAndroid,Platform,StatusBar} from 'react-native'
import { getEnvVars } from "../Environment";
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator/AuthNavigator";
import {createTokenSelector} from '../stores/selectors/PersistentStorageSelectors'
import { connectToRedux } from "../utils/ReduxConnect";
import PersistentStorageActions from "../stores/actions/PersistentStorageActions";
import Loading from "../components/Loading/Loading";
import { isTokenValid } from "../utils/TokenUtils";
const AppContainer = ({token,setToken}) => {
    const isValid = useMemo(() => isTokenValid(token), [token]);
    useEffect(() => {
        if (!isValid && token && token.access_token) {
          setToken({});
        }
      }, [isValid]);
    return(
        <>
         {isValid ? <AppNavigator/> : <AuthNavigator/>}
         <Loading />
        </>
    )
}

export default connectToRedux({
    component: AppContainer,
    stateProps: state => ({
      token: createTokenSelector()(state),
    }),
    dispatchProps: {
      setToken: PersistentStorageActions.setToken,
    },
  });