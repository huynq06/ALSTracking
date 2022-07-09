import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import LineDivider from '../../components/LineDivider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connectToRedux} from '../../utils/ReduxConnect';
import AppActions from '../../stores/actions/AppActions';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
const MoreScreen = ({navigation, logoutAsync, setTenant}) =>{
    const LogOutHandle = async () => {
        console.log(' logoutAsync()');
        //await GoogleSignin.signOut();
        logoutAsync()
      };
      console.log('RE-RENDER MORE')
    function renderHeader() {
        return (
          <View
            style={{
              height: 40,
              backgroundColor: COLORS.white,
              borderBottomWidth:1,
              borderBottomColor: COLORS.lightGray1
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
                <Text h3 darkGray2 style={{
                  fontWeight:'bold'
                }}>
                  Setting
                </Text>
              </View>
             <View></View>
            </View>
          </View>
        );
      }
      function renderInfomation(){
            return(
                <View>
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
              {/* Change Password */}
              <TouchableOpacity
                style={{
                    flexDirection:'row',
                    height:50,
                    alignItems:'center',
                    paddingHorizontal:SIZES.padding
                }}
                onPress={LogOutHandle}
            >
             <Image
                    source={icons.logout}
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
                   Log out
                </Text>
            </TouchableOpacity>
            <LineDivider lineStyle={{
                backgroundColor: COLORS.lightGray1,
               height:1,
              // marginTop:SIZES.padding
            }} />
                </View>
            
            )
      }
    return (
        <SafeAreaView
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
            {renderInfomation()}
            {/* Avatar and User */}
            
        </View>
        
        </SafeAreaView>
    )
}

export default connectToRedux({
    component: MoreScreen,
    stateProps: state => ({}),
    dispatchProps: {
      logoutAsync: AppActions.logoutAsync,
      setTenant: PersistentStorageActions.setTenant,
    },
  });
  
