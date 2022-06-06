import React, { useState,useEffect } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import moment from 'moment';
const today = new Date()
const DatePicker = ({selectedDate,onSelectToday,onBackNext}) => {
  const currentDate = moment();
  const onBackDate = () =>{
      onBackNext('back')
  }
  const onNextDate = () =>{
    onBackNext('next')
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        //paddingLeft: 15,
        paddingVertical: 10,
        flex: 5,
        //backgroundColor: COLORS.red,
      }}>
      <TouchableOpacity
        style={{
            paddingLeft:15,
            marginRight:SIZES.padding
        }}
        onPress={onSelectToday}
      >
        <Text
          style={{
            color: COLORS.primaryALS,
            textAlign: 'center',
            fontSize: 12,
          }}>
          Today
        </Text>
        <Text
          style={{
            fontSize: 10,
          }}>
          {currentDate.format('DD MMM').toUpperCase()}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent:'center',
          alignItems:'center',
           flex:1
        }}>
        <TouchableOpacity
            onPress={onBackDate}
        >
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor:COLORS.darkGray2
            }}
          />
        </TouchableOpacity>
        <View
            style={{
                flex:1,
                backgroundColor:COLORS.white,
                justifyContent:'center',
                alignItems:'center',
            }}
        >
          <Text
            style={{
              color: COLORS.orange,
              textAlign: 'center',
              fontSize: 12,
            }}>
            {selectedDate == today.getDate()? 'Today' :  selectedDate.format('ddd').toUpperCase()}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: COLORS.orange,
            }}>
            {selectedDate.format('DD MMM').toUpperCase()}
          </Text>
        </View>

        <TouchableOpacity
        onPress={onNextDate}>
          <Image
            source={icons.right_arrow}
            style={{
              width: 15,
              height: 15,
              tintColor:COLORS.darkGray2
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;
