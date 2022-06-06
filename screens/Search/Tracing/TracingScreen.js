import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ActivityIndicator,
    Alert,
    Keyboard,
    Animated,
    Platform,
  } from 'react-native';
import dummyData from "../../../constants/dummyData";
import images from "../../../constants/images";
import { COLORS,FONTS,SIZES } from "../../../constants/theme";
import Header from "../../../components/Header";
import TextButton from "../../../components/TextButton";
import icons from "../../../constants/icons";
import constants from "../../../constants/constants";
import Text from '../../../constants/Text'
import LineDivider from "../../../components/LineDivider";
const TracingScreen = ({navigation}) =>{
    const [currentStep,setCurrentStep] = useState(2);
    function renderTrackOrder() {
        return (
          <View
            style={{
              marginTop: SIZES.padding,
              paddingVertical: SIZES.padding,
              borderRadius: SIZES.radius,
              borderWidth: 2,
              borderColor: COLORS.lightGray2,
              marginHorizontal: SIZES.padding,
              backgroundColor: COLORS.white,
            }}>
            {/* Track Order */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
                paddingHorizontal: SIZES.padding,
              }}>
              <Text h3>Tracking</Text>
              <Text gray body3>
                ESL12713
              </Text>
            </View>
            <LineDivider />
            {/* Status */}
            <View
              style={{
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                //backgroundColor:COLORS.green
              }}>
                   <View
                          style={{
                            width:40,
                            height:20,
                            borderRadius:1,
                            borderColor:COLORS.darkGray,
                            backgroundColor:COLORS.orange,
                            marginLeft:-10,
                            alignItems: 'center',
                            justifyContent:'center',

                          }}
                        ></View>
                          <View
                            style={{
                              height: 50,
                              width: 2,
                              marginLeft: 9,
                              backgroundColor: COLORS.secondaryALS,
                              //zIndex: -1,
                            }}></View>
              {constants.track_order_status.map((item, index) => {
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
                    {index < constants.track_order_status.length - 1 && (
                      <View>
                        {index < currentStep && (
                          <View
                            style={{
                              height: 50,
                              width: 2,
                              marginLeft: 9,
                              backgroundColor: COLORS.secondaryALS,
                              //zIndex: -1,
                            }}></View>
                        )}
                        {index >= currentStep && (
                          <Image
                            source={icons.dotted_line}
                            resizeMode="cover"
                            style={{
                              width: 3,
                              height: 50,
                              marginLeft: 9,
                            }}
                          />
                        )}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        );
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
        title="Tracing"
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
    return(
        <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        {renderHeader()}
        <View
          style={{
            height: Platform.OS === 'ios' ? 90 : 60,
            backgroundColor: COLORS.white,
          }}
        />
        {renderTrackOrder()}
      </View>
    )
}
export default TracingScreen;