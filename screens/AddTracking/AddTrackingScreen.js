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
import ValidationMessage from '../../components/ValidationMessage';
import * as Yup from 'yup';
import AddTrackingForm from './AddTrackingForm';
const AddTrackingScreen = ({navigation}) =>{

    const submitTracking = () =>{

    }
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
            title="Add Tracking"
            leftComponent={
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 30,
                  height: 30,
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
                    width: 22,
                    height: 22,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
    
            /*  rightComponent={<CartQuantityButton quantity={cartLagiQuantity} onPress={()=>navigation.navigate("CartLagi")} />} */
          />
        );
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
            
                <View
                    style={{
                        flex:1,
                        //backgroundColor:COLORS.yellow
                    }}
                >
                <AddTrackingForm submit={submitTracking} />
                </View>
              
            
         
        </View>
      );
}

export default AddTrackingScreen;