import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Animated,
  LogBox,
  ScrollView,
  Platform,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import Header from '../../components/Header';
import dummyData from '../../constants/dummyData';
import NotificationItem from '../../components/NotificationItem';
const NotificationsScreen = ({navigation, route}) => {
  function renderHeader() {
    return (
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 60,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
          backgroundColor: COLORS.primaryALS,
          marginTop: Platform.OS == 'ios' ? 30 : 0,
        }}
        title="Notifications"
        leftComponent={
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
              borderWidth: 1,
              borderColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 25,
                height: 25,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }

        /*  rightComponent={<CartQuantityButton quantity={cartLagiQuantity} onPress={()=>navigation.navigate("CartLagi")} />} */
      />
    );
  }
  function renderNotification(){
    return(
      <FlatList
        data={dummyData.notificationList}
       // refreshing={isRefreshing}
        //onRefresh={()=>getNotificationList()}
        keyExtractor={item=>`Notification-${item.ID}}`}
        contentContainerStyle={{
          paddingBottom:60
        }}
        renderItem={({item,index})=>{
          return(
            <NotificationItem
            customContainerStyle={{
              marginHorizontal:SIZES.padding,
              marginBottom: SIZES.radius
            }}
            time= {item.created}
            title={item.title}
            body={item.body}
          />
          )
        }}
      />
    )
    }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
      <View
        style={{
          height: Platform.OS == 'ios' ? 90 : 60,
        }}></View>
      <Text
        style={{
          ...FONTS.h3,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
        }}>
        Gần đây
      </Text>
      {renderNotification()}
    </View>
  );
};

export default NotificationsScreen;
