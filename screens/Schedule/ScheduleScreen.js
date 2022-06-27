import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import Animated, {
    withDelay,
    withTiming,
    useSharedValue,
  } from 'react-native-reanimated';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import moment from 'moment';
import AppActions from '../../stores/actions/AppActions';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
import DatePicker from '../../components/DatePicker/DatePicker';
import LineDivider from '../../components/LineDivider';
import FilterModal from './FilterModal';
const ScheduleScreen = ({navigation}) => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
  const [flights,setFlights] = useState(dummyData.flightSchedules)
  const filter = [1,2];
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
  const handleFilter = () =>{
        const result = [];
        dummyData.flightSchedules.forEach((item,index)=>{
            if(filter.includes(item.warehouseID)){
                result.push(item)
            }
        })
        setFlights(result);
  }
  function renderHeader() {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: COLORS.primaryALS,
          // borderBottomLeftRadius: 45,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            justifyContent: 'space-between',

            //backgroundColor: COLORS.red,
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
              Schedule
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
                filterModalSharedValue1.value = withTiming(0, {
                  duration: 100,
                });
                filterModalSharedValue2.value = withDelay(
                  100,
                  withTiming(0, {
                    duration: 500,
                  }),
                );
              }}>
            <Image
              source={icons.filter}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Selector */}
        {/*   <View
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
        <DatePicker
          selectedDate={selectedDate}
          onSelectToday={onSelectTodayHandle}
          onBackNext={onBackNextHandle}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
      }}>
      {renderHeader()}
      <View
        style={{
          marginTop: SIZES.base,
          paddingBottom:180
        }}>
        <FlatList
          data={flights}
          keyExtractor={item => item.flightID}
        /*   ListFooterComponent={() => {
            return (
              <View
                style={{
                  height:190,
                  backgroundColor:COLORS.red
                }}></View>
            );
          }} */
          ItemSeparatorComponent={() => (
            <LineDivider
              lineStyle={{
                backgroundColor: COLORS.lightGray1,
              }}
            />
          )}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginHorizontal: SIZES.padding,
                  marginVertical: SIZES.base,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/' +
                    'ALS_Logo' +
                    '.png')}
                  style={{
                    width: 60,
                    height: 30,
                  }}
                />
                <View
                    style={{
                        flex:1
                    }}
                >
                  <Text
                    h2
                    darkGray2
                    style={{
                      marginLeft: SIZES.padding,
                    }}>
                    {item.flightNo}
                  </Text>
                  <View
                    style={{
                        flexDirection:'row'
                    }}
                  >
                      <Text
                    body3
                    darkGray2
                    style={{
                      marginLeft: SIZES.padding,
                    }}>
                    ETA: {item.ETA}
                  </Text>
                  <Text
                    body3
                    gray
                    style={{
                      marginLeft: SIZES.base,
                    }}>
                    ATA: {item.ATA}
                  </Text>
                  </View>
                
                </View>
                <View
                    style={{
                        alignSelf:'flex-start',
                        backgroundColor:COLORS.green,
                        paddingHorizontal:SIZES.radius,
                        paddingVertical: 3,
                        borderRadius: SIZES.radius,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text body3 white>Arrived</Text>
                  
                </View>
                <Image
                        source={icons.right_arrow}
                        
                        style={{
                            width:17,
                            height:17,
                            tintColor: COLORS.gray
                        }}
                    />
              </View>
            );
          }}
        />
      </View>
      <FilterModal
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
      />
    </View>
  );
};

export default ScheduleScreen;
