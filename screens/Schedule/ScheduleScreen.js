import React, {useState, useEffect, useRef} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {withDelay, withTiming, useSharedValue} from 'react-native-reanimated';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import moment from 'moment';
import AppActions from '../../stores/actions/AppActions';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from '../../components/DatePicker/DatePicker';
import LineDivider from '../../components/LineDivider';
import FilterModal from './FilterModal';
import FilterModalDateTime from '../../components/FilterModalDateTime';
const ScheduleScreen = ({navigation}) => {
  const today = moment();
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
  const filterModalDatePickerSharedValue1 = useSharedValue(SIZES.height);
  const filterModalDatePickerSharedValue2 = useSharedValue(SIZES.height);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [flights, setFlights] = useState(dummyData.flightSchedules);
  const filter = [1, 2];
  const onDateChangeHandle = date =>{
    setSelectedDate(date);
  }
  const onSelectTodayHandle = () => {
    setIsActiveIcon(false);
    setSelectedDate(today);
  };
  const onToggleCalendar = () => {
    setIsActiveIcon(true);
    filterModalDatePickerSharedValue1.value = withTiming(0, {
      duration: 100,
    });
    filterModalDatePickerSharedValue2.value = withDelay(
      100,
      withTiming(0, {
        duration: 500,
      }),
    );
  };
  const onBackNextHandle = direction => {
    if (direction === 'next') {
      setSelectedDate(moment(selectedDate).add(1, 'days'));
    } else {
      setSelectedDate(moment(selectedDate).add(-1, 'days'));
    }
  };
  const handleFilter = () => {
    const result = [];
    dummyData.flightSchedules.forEach((item, index) => {
      if (filter.includes(item.warehouseID)) {
        result.push(item);
      }
    });
    setFlights(result);
  };
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
  function renderCardHeader() {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          borderBottomColor:COLORS.lightGray1,
          borderBottomWidth:1
        }}>
        <Animated.View
          style={{
            height: 80,
            width: '100%',
/* 
            transform: [
               {
                translateY: scrollY.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [-100, 0, 50],
                }),
              }, 
              {
                scale: scrollY.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [0, 1, 0],
                }),
              },
            ], */
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
                //backgroundColor: COLORS.red,
                marginLeft: SIZES.base,
                justifyContent: 'center',
              }}>
              <Text h3 darkGray2 style={{
                fontWeight:'800'
              }}>
                Schedule
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('Fileter')
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
                  tintColor: COLORS.orange,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* Date Picker */}
          <DatePicker
           onOpenCalendar={onToggleCalendar}
            selectedDate={selectedDate}
            onSelectToday={onSelectTodayHandle}
            onBackNext={onBackNextHandle}
          />
        </Animated.View>
      </View>
    );
  }
  function renderHeaderBar(){
    return(
      <View
        style={{
          position:'absolute',
          top:0,
          right:0,
          left:0,
          height:40,
          paddingHorizontal:SIZES.padding,
          //borderBottomColor:COLORS.lightGray1,
          //borderBottomWidth:1
      
        }}
      >
       {/*  <Animated.View
          style={{
            position:'absolute',
            width:SIZES.width,
            top:0,
            left:0,
            right:0,
            bottom:0,
            backgroundColor:COLORS.primaryALS,
            opacity: scrollY.interpolate({
              inputRange:[30,70],
              outputRange:[0,1]
            })
          }}
        /> */}
        {/* Header bar Title */}
        <Animated.View
          style={{
            position:'absolute',
            width:SIZES.width,
            top:0,
            left:0,
            right:0,
            bottom:0,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.white,
            opacity: scrollY.interpolate({
              inputRange:[40,70],
              outputRange:[0,1]
            }),
            transform:[
              {
                translateY:scrollY.interpolate({
                  inputRange:[40,70],
                  outputRange:[-60,0],
                  extrapolate:'clamp'
                })
              }
            ]
          }}
        >
          <Text h3 darkGray2 style={{
            fontWeight:'800'
          }}>
            Today
          </Text>
        </Animated.View>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
      }}>
      {/* {renderHeader()} */}
      <View
        style={{
         // marginTop: SIZES.base,
          //marginBottom:160
         paddingBottom: 80,
        }}>
         
        <Animated.FlatList
          data={flights}
          keyExtractor={item => item.flightID}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {/* Header */}
         {/*      <View
            style={{
              backgroundColor:COLORS.primaryALS,
              width:SIZES.width,
              height:40  
            }}

            ></View> */}
              {renderCardHeader()}
            </View>
          }
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
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
                  source={require('../../assets/images/' + 'ALS_Logo' + '.png')}
                  style={{
                    width: 60,
                    height: 30,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                  }}>
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
                      flexDirection: 'row',
                    }}>
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
                    alignSelf: 'flex-start',
                    backgroundColor: COLORS.green,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 3,
                    borderRadius: SIZES.radius,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text body3 white>
                    Arrived
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
            );
          }}
        />
      </View>
      <FilterModal
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
      />
       <FilterModalDateTime
        filterModalSharedValue1={filterModalDatePickerSharedValue1}
        filterModalSharedValue2={filterModalDatePickerSharedValue2}
        onDateChangeFunc={onDateChangeHandle}
      />
     {renderHeaderBar()}
    </View>
  );
};

export default ScheduleScreen;
