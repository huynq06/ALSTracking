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
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getEnvVars} from '../../Environment';
import {login} from '../../api/loginApi';
import {getTenant} from '../../api/loginApi';
import images from '../../constants/images';
import {SIZES, COLORS, FONTS} from '../../constants/theme';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
import {connectToRedux} from '../../utils/ReduxConnect';
import TextButton from '../../components/TextButton';
import {useDispatch} from 'react-redux';
import FormInputMik from '../../components/FormInputMik';
import AuthLayout from './AuthLayout';
import utils from '../../utils/Utils';
import CustomSwitch from '../../components/CustomSwitch';
import ValidationMessage from '../../components/ValidationMessage';

const validations = {
  userName: Yup.string().required('Required.'),
  email: Yup.string()
    .email('not Email Address!')
    .required('Required.'),
};
let roleNames = [];
const CreateUpdateUserForm = ({
  navigation,
  editingUser = {},
  submit,
  remove,
}) => {
  const [showPassword, setShowPassword] = useState(false);
const [name,setName] = useState('')
  const usernameRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const onSubmit = values => {
    submit({...editingUser,...values,roleNames})
  };
  const passwordValidation = Yup.lazy(() => {
    if (editingUser.id) {
      return Yup.string();
    }
    return Yup.string().required('Required.').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      );
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
        name:"Nguyen Quang Huy",
        phoneNumber:'0983833193',    
        ...editingUser,
      }}
      onSubmit={values => onSubmit(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <>
          <View style={styles.container}>
            <View style={{display: 'flex'}}>
              <KeyboardAvoidingView behavior="padding">
                {/* <Text>UserName *</Text> */}
                <FormInputMik
                label='User Name'
                style={{
                    backgroundColor:'green'
                }}
                  inputRef={usernameRef}
                  onSubmitEditing={() => emailRef.current.focus()}
                  returnKeyType="next"
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  inputValue={values.userName}
                  autoCapitalize="none"
                  errMsg={errors.userName}
                />
                  <FormInputMik
                label='Email'
                  inputRef={emailRef}
                  onSubmitEditing={() => passwordRef.current.focus()}
                  returnKeyType="next"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  inputValue={values.email}
                  autoCapitalize="none"
                  errMsg={errors.email}
                />
                   <FormInputMik
                label='Password'
                  inputRef={passwordRef}
                  //onSubmitEditing={() => passwordRef.current._root.focus()}
                  returnKeyType="next"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  inputValue={values.password}
                  autoCapitalize="none"
                  errMsg={errors.password}
                  appendComponent={
                    <TouchableOpacity
                      style={{
                        justifyContent: "center",
                      }}
                      onPress={() => setShowPassword((prev) => !prev)}
                    >
                      <Image
                        source={showPassword ? icons.eye_close : icons.eye}
                        style={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </TouchableOpacity>
                  }
                />
              </KeyboardAvoidingView>
            </View>
            <TextButton
              label="Sign up"
              disabled={!isValid}
              buttonContainerStyle={{
                marginTop: SIZES.radius,
                paddingVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isValid
                  ? COLORS.primaryALS
                  : COLORS.transparentprimaryALS,
              }}
              onPress={handleSubmit}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
});
export default CreateUpdateUserForm;
