import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SettingScreen from '../../screens/Setting/SettingScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {isIphoneX} from 'react-native-iphone-x-helper';
import icons from '../../constants/icons';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen';
import MoreScreen from '../../screens/More/MoreScreen';
import FollowScreen from '../../screens/Follow/FollowScreen';
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  const CustomTabBar = props => {
    if (isIphoneX()) {
      return (
        <View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 27,
              backgroundColor: COLORS.white,
            }}></View>
          <BottomTabBar {...props.props} />
        </View>
      );
    } else {
      return <BottomTabBar {...props.props} />;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.lightGray1,
          height: 80,
          paddingVertical: 5,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 2,
        },
      }}
      initialRouteName="HomeRoot"
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="HomeRoot"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor:COLORS.red
              }}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 40,
                  tintColor: focused ? COLORS.primaryALS : COLORS.darkGray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondaryALS : COLORS.darkGray,
                }}>
                Home
              </Text>
            </View>
          ),
          // tabBarButton:(props)=>(
          //     <TabBarCustomButton {...props} />
          // )
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.flightDepart}
                resizeMode="contain"
                style={{
                  width: 27,
                  height: 40,
                  tintColor: focused ? COLORS.primaryALS : COLORS.darkGray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondaryALS : COLORS.darkGray,
                }}>
                Schedule
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.more}
                resizeMode="contain"
                style={{
                  width: 27,
                  height: 40,
                  tintColor: focused ? COLORS.primaryALS : COLORS.darkGray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.secondaryALS : COLORS.darkGray,
                }}>
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
