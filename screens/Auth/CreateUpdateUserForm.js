import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
    View,
    ImageBackground,
    Image,
    Animated,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Keyboard,StyleSheet,
    KeyboardAvoidingView,
TextInput
  } from 'react-native';
  import * as Yup from 'yup';
import { Formik } from 'formik';
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
import ValidationMessage from '../../components/ValidationMessage';

const validations = {
    userName: Yup.string().required('ThisFieldIsRequired.'),
    email: Yup.string()
      .email('ThisFieldIsNotAValidEmailAddress.')
      .required('ThisFieldIsRequired.'),
  };
  
const  CreateUpdateUserForm = ({navigation,editingUser = {}, submit, remove}) =>{
    const [showPassword, setShowPassword] = useState(false);
 
    const usernameRef = useRef();
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const onSubmit = values => {
        console.log('da chay vao onSubmit')
       console.log('da chay vao onSubmit',values)
      };
  const passwordValidation = Yup.lazy(() => {
    if (editingUser.id) {
      return Yup.string();
    }
    return Yup.string().required('AbpAccount::ThisFieldIsRequired.');
  });
  return (
    <Formik
      enableReinitialize
      validationSchema={Yup.object().shape({
        ...validations,
        password: passwordValidation,
      })}
      initialValues={{
        lockoutEnabled: false,
        twoFactorEnabled: false,
        ...editingUser,
      }}
      onSubmit={values => onSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldValue }) => (
        <>
          <View style={styles.container}>
           
              <View style={{ display:'flex' }}>
                <KeyboardAvoidingView behavior="padding">
               
              
                    <Text >UserName *</Text>
                    <TextInput
                      
                   ref={usernameRef}
                style={{
                    backgroundColor:'red'
                }}
                      onSubmitEditing={() => nameRef.current._root.focus()}
                      
                      //returnKeyType="next"
                      onChangeText={handleChange('userName')}
                      onBlur={handleBlur('userName')}
                    value={values.userName}
                      autoCapitalize = 'none'
                    />
            
            
              
           
                </KeyboardAvoidingView>
              </View>
              <TextButton
            label="Sign up"
            //disabled={!isValid}
            buttonContainerStyle={{
              marginTop:SIZES.radius,
              paddingVertical:SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: isValid? COLORS.primaryALS : COLORS.transparentprimaryALS
            }}
            onPress={handleSubmit}
            
          />
         
          </View>
       
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 50,
    },
  });
export default CreateUpdateUserForm;