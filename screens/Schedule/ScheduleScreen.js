import React, {useState, useEffect, useRef, useCallback} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import moment from 'moment';
import DatePicker from '../../components/DatePicker/DatePicker';
import LineDivider from '../../components/LineDivider';
import FilterModal from './FilterModal';
import FilterModalDateTime from '../../components/FilterModalDateTime';
import FlightImpItem from '../../components/FLightImpItem';
import {dateWithSec} from '../../utils/dateHelpers';
import {connectToRedux} from '../../utils/ReduxConnect';
import {createLoadingSelector} from '../../stores/selectors/LoadingSelectors';
import LoadingActions from '../../stores/actions/LoadingActions';
import { getFlightByDate,getFlightImpByDate } from '../../api/FlightAPI';
import TextButton from '../../components/TextButton';
const ScheduleScreen = ({navigation, loading, startLoading, stopLoading}) => {
  const today = moment();
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [type,setType] = useState('EXPORT')
  const [isRefreshing, setIsRefreshing] = useState(false);
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
  const filterModalDatePickerSharedValue1 = useSharedValue(SIZES.height);
  const filterModalDatePickerSharedValue2 = useSharedValue(SIZES.height);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [flights, setFlights] = useState([]);
  const filter = [1, 2];
  const loadFlight = useCallback((date) => {
    console.log('date for load--------------------------',date)
    setIsRefreshing(true);
   setIsLoading(true)
   if(type==='EXPORT'){
    getFlightByDate(dateWithSec(date))
    .then(data => {
      setTotal(data.totalCount);
      let flightData = data.items.map(item => {
        return {
          id: item.id,
          flightNo: item.flight,
          std: item.std,
          cargo: item.cargoTerminal,
          status: item.status,
        };
      });
      setFlights(flightData);
    }).catch((err)=>{
        console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
      setIsRefreshing(false);
    });
   }else{
    getFlightImpByDate(dateWithSec(date))
      .then(data => {
        setTotal(data.totalCount);
        let flightData = data.items.map(item => {
          return {
            id: item.id,
            flightNo: item.flight,
            atd: item.atd,
            std:item.std,
            cargo: item.cargoTerminal,
            status: item.status,
          };
        });
        setFlights(flightData);
      }).catch((err)=>{
          console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
        setIsRefreshing(false);
      });
   }
    
  }, [loading]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFlight(selectedDate);
    });

    return () => {
      unsubscribe();
    };
  }, [loadFlight]);
  const onDateChangeHandle = date => {
    setSelectedDate(date);
    //loadFlight(date);
  };
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
  console.log(selectedDate);
  const onBackNextHandle = direction => {
    if (direction === 'next') {
      setSelectedDate(moment(selectedDate).add(1, 'days'));
     // loadFlight(selectedDate);
    } else {
      setSelectedDate(moment(selectedDate).add(-1, 'days'));
      //loadFlight(selectedDate);
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
  React.useEffect(() => {
    // Fetch Schedules
    loadFlight(today);
  }, []);

  React.useEffect(() => {
    // Fetch Schedules
    loadFlight(selectedDate);
  }, [selectedDate,type]);

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
          borderBottomColor: COLORS.lightGray1,
          borderBottomWidth: 1,
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
              <Text
                h3
                darkGray2
                style={{
                  fontWeight: '800',
                }}>
                Schedule
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('Fileter');
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
  function renderHeaderBar() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 40,
          paddingHorizontal: SIZES.padding,
          //borderBottomColor:COLORS.lightGray1,
          //borderBottomWidth:1
        }}>
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
            position: 'absolute',
            width: SIZES.width,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            opacity: scrollY.interpolate({
              inputRange: [40, 70],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [40, 70],
                  outputRange: [-60, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text
            h3
            darkGray2
            style={{
              fontWeight: '800',
            }}>
            Today
          </Text>
        </Animated.View>
      </View>
    );
  }
  function renderOption(){
    return(
      <View style={{
        flexDirection:'row',
        paddingHorizontal:SIZES.padding,
        height:40,
        justifyContent:'space-between',
      }}>
        <TextButton label='EXPORT' labelStyle={{
          color:type==='EXPORT'? COLORS.green : COLORS.gray,
          fontSize: 15,
          fontWeight:'600'
        }} 
        onPress={()=>setType('EXPORT')}
        buttonContainerStyle={{
          flex:1,
          backgroundColor:COLORS.white,
          borderBottomWidth:1,
          borderBottomColor:type==='EXPORT'? COLORS.green :COLORS.white,
        // marginRight: SIZES.base,
        // borderRadius:SIZES.radius
        }} />
        <TextButton label='IMPORT' labelStyle={{
          color:type==='IMPORT'? COLORS.green : COLORS.gray,
          fontSize: 15,
          fontWeight:'600'
        }} 
        onPress={()=>setType('IMPORT')}
        buttonContainerStyle={{
          flex:1,
          backgroundColor:COLORS.white,
          borderBottomWidth:1,
          borderBottomColor:type==='IMPORT'? COLORS.green : COLORS.white,
        //  marginLeft:SIZES.base,
          //borderRadius:SIZES.radius
        }} />
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        {isLoading?  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={COLORS.primaryALS} />
      </View> : (   <View
        style={{
          paddingBottom: 80,
        }}>
  
          <Animated.FlatList
          onRefresh={() => loadFlight(selectedDate)}
          refreshing={isRefreshing}
            data={flights}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View>
              {renderCardHeader()}
              {renderOption()}
              
              </View>}
        
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            ItemSeparatorComponent={() => (
              <LineDivider
                lineStyle={{
                  backgroundColor: COLORS.lightGray1,
                }}
              />
            )}
            renderItem={({item, index}) => {
              return  <FlightImpItem item={item} />
            }}
          />

      </View>)}
      {/* {renderHeader()} */}
   
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
export default connectToRedux({
  component: ScheduleScreen,
  stateProps: state => ({
    loading: createLoadingSelector()(state),
  }),
  dispatchProps: {
    startLoading: LoadingActions.start,
    stopLoading: LoadingActions.stop,
  },
});
