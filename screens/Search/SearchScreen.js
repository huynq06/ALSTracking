import Animated, {
  withDelay,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import images from '../../constants/images';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import Header from '../../components/Header';
import dummyData from '../../constants/dummyData';
import FilterModal from './FilterModal';
import LineDivider from '../../components/LineDivider';
import IconButton from '../../components/IconButton';
const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [showFilterModel, setShowFilterModel] = useState(false);
  const [listAwb, setListAwb] = useState([]);
  const onChangeTextHandle = text => {
    setSearchText(text);
  };
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
  const handleSearch = () => {
    setListAwb(dummyData.listAwb);
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
        title="Track & Trace"
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
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor:COLORS.green
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 45,
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            flex: 1,
          }}>
          <Image
            source={icons.search}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 20, width: 20, tintColor: COLORS.black}}
          />
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              //alignItems: 'center',
              marginLeft: 5,
              paddingLeft: 5,
              marginBottom: -5,
              flex: 1,
            }}>
            <TextInput
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flex: 1,
                ...FONTS.body3,
              }}
              placeholder="Mawb | Hawb"
              value={searchText}
              onChangeText={text => onChangeTextHandle(text)}
            />
          </View>
          {/* icon */}
          <TouchableOpacity
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
              style={{height: 20, width: 20, tintColor: COLORS.black}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: SIZES.padding,
            marginRight: SIZES.padding,
          }}>
          <IconButton
            containerStyle={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: COLORS.gray2,
              paddingHorizontal: SIZES.radius,
              backgroundColor: COLORS.green,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icons={icons.search}
            iconStyle={{
              tintColor: COLORS.white,
              width: 25,
              height: 25,
            }}
            onPress={handleSearch}
          />
        </View>
      </View>
    );
  }

  function renderSearchResult() {
    return (
      <View
        style={{
          // backgroundColor:COLORS.green,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
        }}>
        <Text body2>{listAwb.length} Results</Text>
        <FlatList
          data={listAwb}
          keyExtractor={item => `${item.ID}`}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                ...styles.cartItemContainer,
              }}
              onPress={() => {
                navigation.navigate('AwbDetail');
              }}>
              {/* Food image */}
              <View
                style={{
                  width: 50,
                  height: 50,
                }}>
                <Image
                  source={icons.awb}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: COLORS.primaryALS,
                  }}
                />
              </View>
              {/* Food Info */}
              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.base,
                }}>
                {/* Title */}
                <Text h2>{item.LAGI_MAWB_PREFIX + item.LAGI_MAWB_NO}</Text>
                {/* Status */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 5,
                      marginHorizontal: 6,
                      width: 10,
                      height: 10,
                      backgroundColor:
                        item.Status === 1 ? COLORS.lightOrange : COLORS.green,
                    }}
                  />
                  <Text
                    body3
                    style={{
                      color:
                        item.Status === 1 ? COLORS.lightOrange : COLORS.green,
                    }}>
                    {item.Status === 1? 'In House' : 'Delivered'}
                  </Text>
                </View>
                {/* Detail */}
                <View
                  style={{
                    flexDirection: 'row',
                    //  backgroundColor:COLORS.red
                  }}>
                  {/* Pieces */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={icons.quantity}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.green,
                      }}
                    />
                    <Text
                      primary
                      body2
                      style={{
                        color: COLORS.green,
                      }}>
                      {item.Pieces}
                    </Text>
                  </View>
                  {/* Weight */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: SIZES.radius,
                    }}>
                    <Image
                      source={icons.weight}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.black,
                        marginTop: 5,
                      }}
                    />
                    <Text
                      primary
                      body2
                      style={{
                        color: COLORS.darkGray,
                      }}>
                      {item.Weight}
                    </Text>
                  </View>
                </View>
              </View>
              {/* Quantity */}
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderBody() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.radius * 2,
        }}>
        {renderSearch()}
        {renderSearchResult()}
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
        style={{
          height: Platform.OS === 'ios' ? 90 : 60,
          backgroundColor: COLORS.white,
        }}
      />
      {renderBody()}
      <FilterModal
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
export default SearchScreen;
