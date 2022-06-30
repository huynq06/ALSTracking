/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';
import 'react-native-reanimated'
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  Alert,
  AppState,
} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './constants/theme';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {fcmService} from './src/FCMService';
import ForegroundHandler from './src/ForegroundHandler';
import messaging from '@react-native-firebase/messaging';
import {localNotificationService} from './src/LocalNotificationService';
import { initAPIInterceptor } from './api/APIInterceptor';
import { AppContainer } from './AppContainer';
import { persistor,store } from './stores';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
// const rootReducer = combineReducers({
//   flights: flightReducer,
// });

// let middlewares = [];
// middlewares.push(ReduxThunk);
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
initAPIInterceptor(store);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [hidden, setHidden] = useState(false);
  const [token, setToken] = useState('');
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      nextAppState => {},
    );

    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    fcmService.subcribeTopic('ALS');
    localNotificationService.configure(onOpenLocalNotification, onToken);
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          Alert.alert(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
        }
      });
    function onRegister(_token) {
      if(Platform.OS==='ios'){
        setToken(_token);
      }
        console.log('[APP] onRegister------------------',_token)
    }
    localNotificationService.createDefaultChannels();
    function onNotification(notify) {
      // console.log('[App] onNotification:',notify)
      const options = {
        soundName: 'default',
        playSound: 'true',
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
        1,
      );
    }
    function onOpenLocalNotification(notify) {
      //console.log('[App] onOpenNotification:',notify)
     Alert.alert('Open notification:' + notify.body);
   }
    function onOpenNotification(notify) {
       //console.log('[App] onOpenNotification:',notify)
      //Alert.alert('Open notification:' + notify.body);
    }
    function onToken(token) {
      if(Platform.OS==='android'){
        setToken(token.token);
      }
      
    }

    //  console.log('tokeSave: ',tokeSave)
    return () => {
      // console.log('App unregister')
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);
  return (
    <Provider store={store}>
      
      <ForegroundHandler />
      <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor='white'
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      {/* <AppNavigator /> */}
      <PersistGate persistor={persistor}>
       
            <AppContainer/>
        
        </PersistGate>
      </SafeAreaProvider>
     
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
