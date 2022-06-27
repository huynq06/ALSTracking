import React, { useEffect, useState, useCallback } from 'react';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import LineDivider from '../../components/LineDivider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabs from "../../components/Tabs";
import TextButton from "../../components/TextButton";
import ItemSeparator from "../../components/ItemSeparator";
import constants from '../../constants/constants';


const Tracing = () => {
    const [currentStep, setCurrentStep] = useState(2);
    return (
        <ScrollView
        style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            //backgroundColor:COLORS.green
        }}>
        <View
            style={{
                width: 120,
                height: 30,
                borderRadius: 1,
                borderColor: COLORS.darkGray,
                backgroundColor: COLORS.gray,
                marginLeft: -10,
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Text>
                Cargo Terminal
            </Text>
        </View>
        <View
            style={{
                height: 30,
                width: 2,
                marginLeft: 9,
                backgroundColor: COLORS.secondaryALS,
                //zIndex: -1,
            }}></View>
        {constants.tracking.cargo_Terminal.trackList.map((item, index) => {
            return (
                <View key={`StatusList-${index}`}>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: -10,
                        }}>
                        <Image
                            source={icons.check_circle}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor:
                                    index <= currentStep
                                        ? COLORS.secondaryALS
                                        : COLORS.lightGray1,
                            }}
                        />
                        <View
                            style={{
                                marginLeft: SIZES.radius,
                            }}>
                            <Text h3 darkGray2>{item.title}</Text>
                            <Text gray body4>
                                {item.sub_title}
                            </Text>
                        </View>
                    </View>
                    {index < constants.tracking.cargo_Terminal.trackList.length - 1 && (
                        <View>
                            {index < currentStep && (
                                <View
                                    style={{
                                        height: 30,
                                        width: 2,
                                        marginLeft: 9,
                                        backgroundColor: COLORS.secondaryALS,
                                        //zIndex: -1,
                                    }}></View>
                            )}
                            {index >= currentStep && (
                                <View
                                style={{
                                    height: 30,
                                    width: 2,
                                    marginLeft: 9,
                                    backgroundColor: COLORS.secondaryALS,
                                    //zIndex: -1,
                                }}></View>
                            )}
                        </View>
                    )}
                </View>
            );
        })}
          <View
            style={{
                height: 30,
                width: 2,
                marginLeft: 9,
                backgroundColor: COLORS.secondaryALS,
                //zIndex: -1,
            }}></View>
        <View
            style={{
                width: 200,
                height: 30,
                borderRadius: 1,
                borderColor: COLORS.darkGray,
                backgroundColor: constants.tracking.offCargoTerminal.active===false? COLORS.gray : COLORS.green,
                marginLeft: -10,
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Text>
                Off-Airport Cargo Terminal
            </Text>
        </View>
      <View
        style={{
            //backgroundColor:COLORS.green,
            //paddingBottom:40
        }}
      >
      {constants.tracking.offCargoTerminal.trackList.map((item, index) => {
            return (
                <View key={`offCargoTerminal-${index}`}
                
                >
  <View
            style={{
                height: 30,
                width: 2,
                marginLeft: 9,
                backgroundColor: COLORS.secondaryALS,
                //zIndex: -1,
            }}></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: -10,
                        }}>
                        <Image
                            source={icons.check_circle}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor:
                                    index <= currentStep
                                        ? COLORS.secondaryALS
                                        : COLORS.lightGray1,
                            }}
                        />
                        <View
                            style={{
                                marginLeft: SIZES.radius,
                            }}>
                            <Text h3 darkGray2>{item.title}</Text>
                            <Text gray body4>
                                {item.sub_title}
                            </Text>
                        </View>
                        
                    </View>
              
                </View>
            );
        })}
      </View>
      <View
            style={{
                height: 30,
                width: 2,
                marginLeft: 9,
                backgroundColor: COLORS.secondaryALS,
                //zIndex: -1,
            }}></View>
        <View
            style={{
                width: 120,
                height: 30,
                borderRadius: 1,
                borderColor: COLORS.darkGray,
                backgroundColor: constants.tracking.Delivery.active===false? COLORS.gray : COLORS.green,
                marginLeft: -10,
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Text>
                Delivery
            </Text>
            
        </View>
        <View
        style={{
            //backgroundColor:COLORS.green,
            paddingBottom:40
        }}
      >
      {constants.tracking.offCargoTerminal.trackList.map((item, index) => {
            return (
                <View key={`offCargoTerminal-${index}`}
                
                >
  <View
            style={{
                height: 30,
                width: 2,
                marginLeft: 9,
                backgroundColor: COLORS.secondaryALS,
                //zIndex: -1,
            }}></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: -10,
                        }}>
                        <Image
                            source={icons.check_circle}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor:
                                    index <= currentStep
                                        ? COLORS.secondaryALS
                                        : COLORS.lightGray1,
                            }}
                        />
                        <View
                            style={{
                                marginLeft: SIZES.radius,
                            }}>
                            <Text h3 darkGray2>{item.title}</Text>
                            <Text gray body4>
                                {item.sub_title}
                            </Text>
                        </View>
                        
                    </View>
              
                </View>
            );
        })}
      </View>
    </ScrollView>
    );
}

export default Tracing;