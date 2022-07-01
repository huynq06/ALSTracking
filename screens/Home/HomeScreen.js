import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import TextButton from '../../components/TextButton';
import OptionItem from '../../components/OptionItem';
import CategoryCard from '../../components/CategoryCard';
import {getTenant} from '../../api/loginApi';
import {connectToRedux} from '../../utils/ReduxConnect';
import moment from 'moment';
import AppActions from '../../stores/actions/AppActions';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
import DatePicker from '../../components/DatePicker/DatePicker';
import LineDivider from '../../components/LineDivider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const HomeScreen = ({navigation, logoutAsync, setTenant}) => {
  const pageID = 100063781500462; // Waltmart's ID
  const scheme = Platform.select({
    ios: 'fb://profile/',
    android: 'fb://page/',
  });
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const [activeSearch, setActiveSearch] = useState(0);
  const onSelectTodayHandle = () => {
    setIsActiveIcon(false);
    setSelectedDate(today);
  };
  const onBackNextHandle = direction => {
    if (direction === 'next') {
      setSelectedDate(moment(selectedDate).add(1, 'days'));
    } else {
      setSelectedDate(moment(selectedDate).add(-1, 'days'));
    }
  };
  const url = `${scheme}${pageID}`;
  const handleOpenLink = async url => {
    try {
      await Linking.openURL(url);
    } catch {
      throw new Error('URI cant open:' + url);
    }
  };
  const LogOutHandle = async () => {
    console.log(' logoutAsync()');
    //await GoogleSignin.signOut();
    logoutAsync();
  };
  const SetTenantHandle = () => {
    getTenant('ALSW_UAT').then(({success, ...data}) => {
      console.log('getTenant###########################', data);
      setTenant(data);
      //toggleTenantSelection();
    });
  };
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

            //backgroundColor:COLORS.red,
            //marginTop: SIZES.base,
          }}>
          {/* Avartar */}
          {/* <TouchableOpacity onPress={LogOutHandle}>
            <Image
              source={icons.filter}
              style={{
                resizeMode: 'contain',
                width: 25,

                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity> */}
          <View></View>
          <View
            style={{
              //flex: 1,
              marginLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text h3 darkGray2 style={{
              //fontWeight:'800'
            }}>
              Home
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <Image
              source={icons.search}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Selector */}
        {/* <View
          style={{
            paddingHorizontal:SIZES.padding,
            marginTop:SIZES.base,
            flexDirection:'row',
            justifyContent:'space-between'
          }}
        >
            <TextButton
            label='Import'  
            buttonContainerStyle={{
              backgroundColor: '#597EAA',
              width:100,
              height:35,
              justifyContent:'center',
              borderRadius: SIZES.radius
            }}
            ></TextButton>
                 <TextButton
            label='Export'  
            buttonContainerStyle={{
              backgroundColor: '#597EAA',
              width:100,
              height:35,
              justifyContent:'center',
              borderRadius: SIZES.radius
            }}
            ></TextButton>
                 <TextButton
            label='Order'  
            buttonContainerStyle={{
              backgroundColor: '#597EAA',
              width:100,
              height:35,
              justifyContent:'center',
              borderRadius: SIZES.radius
            }}
            ></TextButton>
        </View> */}
        {/* Date Picker */}
        {/* <DatePicker
            selectedDate={selectedDate}
            onSelectToday={onSelectTodayHandle}
            onBackNext={onBackNextHandle}
          /> */}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {renderHeader()}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          //paddingVertical:SIZES.radius
          //marginTop: 20,
        }}>
        <FlatList
          data={dummyData.listImpAwb}
          keyExtractor={item => item.ID}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
            style={{
              marginTop:20,
              //marginBottom:140
            }}
              ></View>
          }
          ListFooterComponent={
            <View
            style={{
              marginTop:20,
              marginBottom:140
            }}
              ></View>
          }
          ItemSeparatorComponent={() => (
            <LineDivider
              lineStyle={{
                backgroundColor: COLORS.lightGray1,
              }}
            />
          )}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  marginBottom: SIZES.base,
                }}
                onPress={() => {
                  navigation.navigate('TrackingDetail');
                }}>
                <Text
                  h3
                  style={{
                    color: COLORS.secondaryALS,
                    fontWeight: '800',
                  }}>
                  {item.LAGI_MAWB_NO + item.LAGI_MAWB_PREFIX}
                </Text>
                {/* detail */}
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {/* pw-flightNot */}
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        //backgroundColor: COLORS.green,
                      }}>
                      <Image
                        source={icons.quantity}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.gray,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                        }}>
                        20 pcs - 137 kg
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                      }}>
                      <Image
                        source={icons.flightLanded}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.gray,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                        }}>
                        KE361
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={icons.pin}
                        style={{
                          width: 20,
                          height: 20,
                          marginLeft: SIZES.padding,
                          tintColor: COLORS.gray,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                        }}>
                        Cargo Terminal
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: SIZES.padding,
                        marginTop: SIZES.base,
                      }}>
                      <Icon
                        name="sms"
                        size={20}
                        style={{
                          color: COLORS.gray,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                        }}>
                        In transist
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={icons.right_arrow}
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          position: 'absolute',
          bottom: 100,
          right: 10,
          height: 50,
          backgroundColor: COLORS.orange,
          borderRadius: 100,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 0.5,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('AddTracking')}>
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default connectToRedux({
  component: HomeScreen,
  stateProps: state => ({}),
  dispatchProps: {
    logoutAsync: AppActions.logoutAsync,
    setTenant: PersistentStorageActions.setTenant,
  },
});
