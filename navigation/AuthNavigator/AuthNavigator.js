import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {

  return (
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
  );
}
