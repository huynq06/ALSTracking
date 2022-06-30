import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator/HomeNavigator';import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen'
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
//     <NavigationContainer>
//          <Drawer.Navigator
//       useLegacyImplementation
// screenOptions={{
//   headerShown:false
// }}
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen  name="Home" component={HomeNavigator}  />
//       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     </Drawer.Navigator>
//     </NavigationContainer>
  );
};

export default AppNavigator;
