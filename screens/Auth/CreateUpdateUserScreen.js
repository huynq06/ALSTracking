import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
    View,
    ImageBackground,
    Image,
    Animated,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Keyboard,
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEnvVars } from "../../Environment";
import { login } from "../../api/loginApi";
import { getTenant } from "../../api/loginApi";
import images from '../../constants/images';
import { SIZES,COLORS,FONTS } from '../../constants/theme';
import icons from "../../constants/icons";
import Text from '../../constants/Text'
import PersistentStorageActions from "../../stores/actions/PersistentStorageActions";
import { connectToRedux } from "../../utils/ReduxConnect";
import TextButton from '../../components/TextButton';
import {useDispatch} from 'react-redux';
import FormInput from '../../components/FormInput';
import AuthLayout from './AuthLayout';
import utils from '../../utils/Utils'
import CustomSwitch from '../../components/CustomSwitch';
import CreateUpdateUserForm from './CreateUpdateUserForm';

const CreatUpdateUserScreen = ({navigation}) =>{

    function isEnableSignUp(){
        return true;
    }
    const signupHandle = () =>{

    }
    return(
        <AuthLayout
        title="Getting Started"
        subTitle="Create an account to continue!"
      >
        <View
          style={{
            flex: 1,
            margin: SIZES.padding,
          }}
        >
             <CreateUpdateUserForm submit={signupHandle} />
          
          <View
            style={{
              flexDirection:'row',
              marginTop:SIZES.radius,
              justifyContent:"center"
            }}
          >
            <Text body3>Already have an acount?</Text>
         
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
            style={{
              marginLeft:3
            }}>
              <Text primary h3>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthLayout>
    )
}

export default CreatUpdateUserScreen;