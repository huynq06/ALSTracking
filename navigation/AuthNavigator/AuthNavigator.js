import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/Auth/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={() => ({
           title:'Login',
          headerShown: false
        })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
