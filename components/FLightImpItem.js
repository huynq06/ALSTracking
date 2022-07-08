import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import icons from '../constants/icons';
import Text from '../constants/Text';
import RoundIcon from './RoundIcon';
import images from '../constants/images';

const FlightImpItem = ({item}) =>{
    return(
        <View
                style={{
                  marginHorizontal: SIZES.padding,
                  marginVertical: SIZES.base,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                 /*  source={item.cargo? require('../../assets/images/'+ item.cargo +'.png') : require('../../assets/images/default.png')} */
                 source={item.cargo === 'ALSC'? images.alsc : item.cargo==='ACSV'? images.acsv : images.ncts}
                  style={{
                    width: item.cargo === 'ALSC'? 40 : item.cargo==='ACSV'? 40 : 40,
                    height:  item.cargo === 'ALSC'? 20 : item.cargo==='ACSV'? 15 : 50,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    h3
                    secondaryALS
                    style={{
                      marginLeft: SIZES.padding,
                      fontWeight:'bold'
                    }}>
                    {item.flightNo}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      body4
                      darkGray2
                      style={{
                        marginLeft: SIZES.padding,
                      }}>
                      STD: {item?.std}
                    </Text>
                    <Text
                      body4
                      gray
                      style={{
                        marginLeft: SIZES.base,
                      }}>
                      ATD: {item?.atd?.substring(10)}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: item.status === 'UNDEPARTED'? COLORS.gray : COLORS.green,
                    paddingHorizontal: SIZES.radius,
                    //paddingVertical: 3,
                    borderRadius: SIZES.radius,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text body5 style={{
                    color: item.status === 'UNDEPARTED'? COLORS.black : COLORS.white,
                  }}>
                   {item.status === 'UNDEPARTED' ? 'undeparted' : 'departed'}
                  </Text>
                </View>
                <Image
                  source={icons.right_arrow}
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: COLORS.gray,
                  }}
                />
              </View>
    )
}

export default FlightImpItem;