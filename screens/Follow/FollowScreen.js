import Animated, {
  interpolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import HorizontalCalendar from '../../components/HorizontalCalendar';
import * as dimensions from '../../constants/dimensions';
import DatePicker from '../../components/DatePicker/DatePicker';
import FilterModalDateTime from '../../components/FilterModalDateTime';
import moment from 'moment';
import dummyData from '../../constants/dummyData';
import TextButton from '../../components/TextButton';
const FollowScreen = ({navigation}) => {
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const today = moment();
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
  const [selectedDate, setSelectedDate] = useState(today);
  const [activeSearch, setActiveSearch] = useState(0);
  const onDateChangeHandle = date => {
    setSelectedDate(date);
  };
  const onSelectDate = date => {
    setSelectedDate(date);
  };
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
  const onToggleCalendar = () => {
    setIsActiveIcon(true);
    filterModalSharedValue1.value = withTiming(0, {
      duration: 100,
    });
    filterModalSharedValue2.value = withDelay(
      100,
      withTiming(0, {
        duration: 500,
      }),
    );
  };
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
        title="Theo dõi"
        leftComponent={
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 30,
              height: 30,
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
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        }

        /*  rightComponent={<CartQuantityButton quantity={cartLagiQuantity} onPress={()=>navigation.navigate("CartLagi")} />} */
      />
    );
  }
  function renderTopSearch() {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: SIZES.radius,
        }}>
        <Text>Top Searchs</Text>
        <FlatList
          horizontal
          keyExtractor={item => `search-${item.id}`}
          data={dummyData.topSearch}
          contentContainerStyle={{
            marginVertical: SIZES.base,
          }}
          renderItem={({item, index}) => (
            <TextButton
              buttonContainerStyle={{
                backgroundColor:
                  index == activeSearch ? COLORS.primaryALS :COLORS.white ,
                paddingHorizontal: 7,
                paddingVertical: 3,
                marginLeft: index == 0 ? 0 : SIZES.radius,
                borderRadius: SIZES.radius,
                borderColor: COLORS.primaryALS,
                borderWidth:1
              }}
              onPress={()=>{
                setActiveSearch(index)
              }}
              label={item.name}
              labelStyle={{
                fontSize: 13,
                color:   index == activeSearch ? COLORS.white  :COLORS.primaryALS
              }}
            />
          )}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: Platform.OS === 'ios' ? 90 : 60,
          backgroundColor: COLORS.white,
        }}
      />
      {renderTopSearch()}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          //backgroundColor:COLORS.yellow
        }}>
        {isActiveIcon ? (
          <DatePicker
            selectedDate={selectedDate}
            onSelectToday={onSelectTodayHandle}
            onBackNext={onBackNextHandle}
          />
        ) : (
          <View
            style={{
              flex: 5,
            }}>
            <HorizontalCalendar onSelectDate={onSelectDate} />
          </View>
        )}

        <TouchableOpacity
          style={{
            marginLeft: SIZES.radius,
            flex: 1,
          }}
          onPress={onToggleCalendar}>
          <Image
            source={icons.calendar}
            style={{
              tintColor: isActiveIcon ? COLORS.green : COLORS.gray,
              width: dimensions.iconSize,
              height: dimensions.iconSize,
            }}
            // tintColor={isActiveIcon ? COLORS.green : COLORS.gray}
          />
        </TouchableOpacity>
      </View>
      <FilterModalDateTime
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
        onDateChangeFunc={onDateChangeHandle}
      />
    </View>
  );
};

export default FollowScreen;
