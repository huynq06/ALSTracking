/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './constants/theme';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import flightReducer from './stores/reducers/flights';
import { PersistGate } from 'redux-persist/integration/react';
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
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primaryALS}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      {/* <AppNavigator /> */}
      <PersistGate persistor={persistor}>
       
            <AppContainer/>
        
        </PersistGate>
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
