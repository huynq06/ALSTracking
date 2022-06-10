import {
  useSharedValue,
} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import icons from '../../../constants/icons';
import Text from '../../../constants/Text';
import Header from '../../../components/Header';
import ItemSeparator from '../../../components/ItemSeparator';
import TextButton from '../../../components/TextButton';
import FilterModal from '../FilterModal';
const AwbDetailScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [showFilterModel, setShowFilterModel] = useState(false);
  const onChangeTextHandle = () => {};
  const filterModalSharedValue1 = useSharedValue(SIZES.height);
  const filterModalSharedValue2 = useSharedValue(SIZES.height);
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
  // function renderSearch() {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //       }}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           height: 45,
  //           marginHorizontal: SIZES.padding,
  //           marginTop: SIZES.padding,
  //           paddingHorizontal: SIZES.radius,
  //           borderRadius: SIZES.radius,
  //           backgroundColor: COLORS.lightGray2,
  //           flex: 1,
  //         }}>
  //         <Image
  //           source={icons.search}
  //           style={{height: 20, width: 20, tintColor: COLORS.black}}
  //         />
  //         <View
  //           style={{
  //             marginLeft: 5,
  //             paddingLeft: 5,
  //             marginBottom: -5,
  //             flex: 1,
  //           }}>
  //           <TextInput
  //             style={{
  //               flex: 1,
  //               ...FONTS.body3,
  //             }}
  //             placeholder="Mawb | Hawb"
  //             value={searchText}
  //             onChangeText={text => onChangeTextHandle(text)}
  //           />
  //         </View>
  //         {/* icon */}
  //         <TouchableOpacity onPress={() => {
  //           console.log('go go')
  //           filterModalSharedValue1.value = withTiming(0,{
  //             duration:100
  //         })
  //         filterModalSharedValue2.value=withDelay(100,
  //             withTiming(0,{
  //                 duration:500
  //             }))
  //         }}>
  //           <Image
  //             source={icons.filter}
  //             style={{height: 20, width: 20, tintColor: COLORS.black}}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //       <View
  //         style={{
  //           marginTop: SIZES.padding,
  //           marginRight: SIZES.padding,
  //         }}>
  //         <IconButton
  //           containerStyle={{
  //             borderWidth: 2,
  //             borderRadius: 10,
  //             borderColor: COLORS.gray2,
  //             paddingHorizontal: SIZES.radius,
  //             backgroundColor: COLORS.green,
  //             height: 45,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}
  //           icons={icons.search}
  //           iconStyle={{
  //             tintColor: COLORS.white,
  //             width: 25,
  //             height: 25,
  //           }}
  //           onPress={()=>{
  //         }}
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  function renderSearchResult() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            gray
            h2
            style={{
              flex: 1,
            }}>
            Airway Bill
          </Text>
          <TextButton
            buttonContainerStyle={{
              width: 80,
              borderRadius: 30,
              backgroundColor: COLORS.secondaryALS,
            }}
            label="Tracing"
            onPress={() => {
              navigation.navigate('Tracing');
            }}
          />
        </View>

        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        />
        {/* AWB Number */}
        <View>
          <Text gray h3>
            AWB Number
          </Text>
          <Text black body3>
            160 62287595
          </Text>
        </View>
        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        />
        {/* Ship Date & Route*/}
        <View
          style={{
            flexDirection: 'row',
          }}>
          {/* Ship Date */}
          <View
            style={{
              flex: 1,
            }}>
            <Text gray h3>
              Shipment Date
            </Text>
            <Text black body3>
              05/04/2022
            </Text>
          </View>
          {/* Route */}
          <View>
            <Text
              gray
              h3
              style={{
                alignSelf: 'flex-end',
              }}>
              Route
            </Text>
            <Text black body3>
              DBX/NBO
            </Text>
          </View>
        </View>
        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        />
        {/* Cân & Kiên*/}
        <View
          style={{
            flexDirection: 'row',
          }}>
          {/* Pieces */}
          <View
            style={{
              flex: 1,
            }}>
            <Text gray h3>
              Pieces
            </Text>
            <Text black body3>
              10
            </Text>
          </View>
          {/* Weight */}
          <View>
            <Text gray h3>
              Weight
            </Text>
            <Text black body3>
              100KG
            </Text>
          </View>
        </View>
        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        />
        {/* Shipper */}
        <View>
          <Text gray h3>
            Shipper
          </Text>
          <Text black body3>
            DHL Express
          </Text>
        </View>
        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        />
        {/* Consignee */}
        <View>
          <Text gray h3>
            Consignee
          </Text>
          <Text black body3>
            CONG TY TNHH SHIN SUNG VINA
          </Text>
        </View>
        <ItemSeparator
          customContainerStyle={{
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
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
        {/*   {renderSearch()} */}
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
export default AwbDetailScreen;
