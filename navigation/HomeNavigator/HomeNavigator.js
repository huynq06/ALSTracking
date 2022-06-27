import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from '../MainNavigator/MainNavigator';
import SearchNavigator from '../SearchNavigator/SearchNavigator';
import NewsScreen from '../../screens/News/NewsScreen';
import FlightImportScreen from '../../screens/FlightImport/FlightImportScreen';
import NotificationsScreen from '../../screens/Notifications/NotificationsScreen';
import UsersScreen from '../../screens/User/UserScreen';
import FollowScreen from '../../screens/Follow/FollowScreen';
import AddTrackingScreen from '../../screens/AddTracking/AddTrackingScreen';
import TrackingDetailScreen from '../../screens/TrackingDetail/TrackingDetailScreen';
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="SearchNav" component={SearchNavigator} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="FlightImport" component={FlightImportScreen} />
      <Stack.Screen name="Notifications" component={UsersScreen} />
      <Stack.Screen name="Follow" component={FollowScreen} />
      <Stack.Screen name="AddTracking" component={AddTrackingScreen} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
