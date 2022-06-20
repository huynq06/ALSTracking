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
//import { LoginManager, AccessToken } from 'react-native-fbsdk';
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
import IconTextButton from '../../components/IconTextButton';
import CustomSwitch from '../../components/CustomSwitch';
import Authenticated from './Authenticated';
const LoginScreen = ({setToken,setTenant,navigation}) =>{
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
    const [email, setEmail] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [emaiError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [saveMe, setSaveMe] = useState(false);
    const [timer, setTimer] = useState(60);
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
/*     async function signIn() {
      try {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions([
          'public_profile',
          'email',
        ]);
  
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
  
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
  
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
  
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
  
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      } catch (error) {
        alert(error);
      }
    } */
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setAuthenticated(user);
    //   } else {
    //     setAuthenticated(user);
    //   }
    // });
    // if (authenticated) {
    //   return <Authenticated />;
    // }
    function isEnableSignIn() {
      return email != '' && password != '' && emaiError == '';
    }
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  
    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus('Keyboard Shown');
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus('Keyboard Hidden');
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
    const handleLogin = async () => {
      let action;
      setIsLoading(true);
      await AsyncStorage.setItem('userLogin', email);
      if(saveMe){
        await AsyncStorage.setItem('passwordLogin', password);
      }
      else{
        await AsyncStorage.removeItem("passwordLogin");
      }
      setError(null);
      login({userName:email,password:password}).then(data =>{
        if (data.result !== 1) {
           Alert.alert(data.description)
            return;
          }
        //console.log('data$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',data)
        setToken({
            "access_token": "",
            "expires_in": 31536000,
            "token_type": "Bearer",
            "refresh_token": "",
            "expire_time": new Date().valueOf() + 31536000,
            "scope": undefined,
        })
    }).catch((e)=>{
        setError(err.message);
        setIsLoading(false);
    })
      //action = authActions.login(email, password);
    
    };
    const setSaveMeHandler = async (value) =>{
      if(value){
        await   AsyncStorage.setItem('saveMe', 'true');
      }
      else {
        await   AsyncStorage.setItem('saveMe', 'false');
      }
     setSaveMe(value);
    }
    const getData = useCallback(async ()=>{
      const saveMeStore = await AsyncStorage.getItem('saveMe');
      const userLogin = await AsyncStorage.getItem('userLogin');
      console.log('userLogin:',userLogin)
      if(userLogin){
        console.log('da chay vao getData')
        setEmail(userLogin)
      }
      const passwordLogin = await AsyncStorage.getItem('passwordLogin');
      if(passwordLogin){
        setPassword(passwordLogin)
      }
      if(saveMeStore=='true'){
        setSaveMe(true)
      }
    },[])
    useEffect(() => {
      getData()
    }, []);
    useEffect(() => {
      if (error) {
        Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
      }
    }, [error]);
    return (
      <AuthLayout
        title="Let's Sign You In"
        subTitle="Welcome back, you 've been missed">
        <View
          style={{
            flex: 1,
            margin: SIZES.padding,
          }}>
          {/* Email */}
          <FormInput
            label="User"
            keyboardType="email-address"
            autoCompleteType="email"
            inputValue={email}
            inputStyle={{
              color: COLORS.primaryALS,
            }}
            onChange={text => {
              //  utils.validateEmail(text, setEmailError);
              setEmail(text);
            }}
            
            //  errMsg={emaiError}
            appendComponent={
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Image
                  source={icons.correct}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      email == ''
                        ? COLORS.gray
                        : email != '' && emaiError == ''
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label="Password"
            autoCompleteType="password"
            inputValue={password}
            inputStyle={{
              color: COLORS.primaryALS,
            }}
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            secureTextEntry={!showPassword}
            errMsg={passwordError}
            onChange={text => {
              utils.validatePassword(text, setPasswordError);
              setPassword(text);
            }}
            appendComponent={
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                }}
                onPress={() => setShowPassword(prev => !prev)}>
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
          {/* Save Me & Fogot Password */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
              justifyContent: 'space-between',
            }}>
            <CustomSwitch
              value={saveMe}
              onChange={value => {
                setSaveMeHandler(value)
               
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text body4 gray>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          {/* Sign In & Sign up */}
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.primaryALS} />
          ) : (
            <TextButton
              label="Sign In"
              disabled={!isEnableSignIn()}
              buttonContainerStyle={{
                marginTop: SIZES.radius,
                paddingVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isEnableSignIn()
                  ? COLORS.primaryALS
                  : COLORS.transparentprimaryALS,
              }}
              onPress={handleLogin}
            />
          )}
            
            
          {/*  <TextButton
            label="Sign In"
            isLoading = {isLoading}
            disabled={!isEnableSignIn()}
            buttonContainerStyle={{
              marginTop:SIZES.radius,
              paddingVertical:SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: isEnableSignIn()? COLORS.primaryALS : COLORS.transparentprimaryALS
            }}
            onPress={handleLogin}
            
          /> */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
              justifyContent: 'center',
            }}>
            <Text body3>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={{
                marginLeft: 3,
              }}>
              <Text primary h3>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          {/* Login with Google & Facebook */}
          <View>
             <IconTextButton
              label="Continue with Facebook"
              customContainerStyle={{
                height:50,
                backgroundColor:COLORS.blue,
                marginTop:SIZES.padding,
                borderRadius:SIZES.radius
              }}
              icon={icons.fb}
              iconStyle={{
                marginRight:SIZES.base
              }}
              labelStyle={{
                color:COLORS.white,
                fontSize: SIZES.body3
              }}
              onPress={()=>{console.log('log in with fb')}}
            /> 
             </View>
            {/*   <IconTextButton
              label="Continue with Google"
              customContainerStyle={{
                height:50,
                backgroundColor:COLORS.lightGray2,
                marginTop:SIZES.base,
                borderRadius:SIZES.radius
              }}
              icon={icons.google}
              iconStyle={{
                marginRight:SIZES.base
              }}
              labelStyle={{
                color:COLORS.gray,
                fontSize: SIZES.body3
              }}
              onPress={()=>{console.log('log in with fb')}}
            />
          </View>
           <View>
          {/* <View
            style={{
              flexDirection:'row',
              marginTop:SIZES.radius,
              justifyContent:"center"
            }}
          >
            <Text body3>Didn't Receive Code?</Text>
            <TouchableOpacity
            style={{
              marginLeft:3
            }}
            onPress={()=>setTimer(60)}>
              <Text primary h3>({timer}s)</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </AuthLayout>
    );
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