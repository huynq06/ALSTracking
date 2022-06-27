import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import LineDivider from '../../components/LineDivider';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MoreScreen = () =>{
    function renderHeader() {
        return (
          <View
            style={{
              height: 60,
              backgroundColor: COLORS.primaryALS,
              // borderBottomLeftRadius: 45,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-between',
                marginTop: SIZES.base,
              }}>
              <View></View>
    
              <View
                style={{
                  //flex: 1,
                  marginLeft: SIZES.base,
                  justifyContent: 'center',
                }}>
                <Text h3 white>
                  More
                </Text>
              </View>
             <View></View>
            </View>
          </View>
        );
      }
    return (
        <View
          style={{
            flex: 1,
            backgroundColor:COLORS.white,
          }}>
          {renderHeader()}
        <View
            style={{
            
                marginTop:SIZES.base,
               
                flex:1
            }}
        >
            {/* Avatar and User */}
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding,
                    height:70
                }}
            >
                <Image
                    source={icons.user}
                    style={{
                        width:30,
                        height:30,
                        tintColor:COLORS.primaryALS
                    }}
                />
                <Text h3 style={{
                    color: COLORS.primaryALS,
                    marginLeft: SIZES.base,
                    fontWeight:'800'
                }}>Hello, NGUYEN VAN A</Text>
            </View>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
            {/* Profile Imfomation */}
            <View
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding
                }}
            >
                <Image
                    source={icons.user}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.blue
                    }}
                />
                <Text body3 style={{
                    color:COLORS.blue,
                    marginLeft: SIZES.base
                }}>
                    Profile Imfomation
                </Text>
            </View>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
            {/* Change Password */}
            <View
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding
                }}
            >
              <Icon name='lock' size={20} style={{
                color: COLORS.blue
              }} />
                <Text body3 style={{
                    color:COLORS.blue,
                    marginLeft: SIZES.base
                }}>
                    Change password
                </Text>
            </View>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
              {/* Help */}
              <View
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding
                }}
            >
              <Image
                    source={icons.info}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.blue
                    }}
                />
                <Text body3 style={{
                    color:COLORS.blue,
                    marginLeft: SIZES.base
                }}>
                    Help
                </Text>
            </View>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
              {/* Change Password */}
              <View
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding
                }}
            >
             <Image
                    source={icons.star}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.blue
                    }}
                />
                <Text body3 style={{
                    color:COLORS.blue,
                    marginLeft: SIZES.base
                }}>
                    Review App
                </Text>
            </View>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
        </View>
        
        </View>
    )
}

export default MoreScreen
