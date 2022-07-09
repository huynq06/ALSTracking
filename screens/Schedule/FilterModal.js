import Animated, {
    interpolate,
    useAnimatedStyle,
    withDelay,
    withTiming,
  } from 'react-native-reanimated';
  import React, {useState, useRef, useEffect} from 'react';
  import {
    View,
  } from 'react-native';
  import Text from '../../constants/Text'
  import TextButton from '../../components/TextButton';
  import icons from '../../constants/icons';
  import {SIZES, FONTS, COLORS} from '../../constants/theme';
  import FilterItem from '../../components/FilterItem';
import images from '../../constants/images';
  const FilterModal = ({filterModalSharedValue1, filterModalSharedValue2,applyFilterFunc}) => {
    const [selected, setSelect] = useState('ALL');
    const [cargoTerminal,setCargoTerminal] = useState(0);
    const filterModalContainerAniamtedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          filterModalSharedValue1.value,
          [SIZES.height, 0],
          [0, 1],
        ),
        transform: [
          {
            translateY: filterModalSharedValue1.value,
          },
        ],
      };
    });
    const filterModalBackgroundAniamtedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          filterModalSharedValue2.value,
          [SIZES.height, 0],
          [0, 1],
        ),
      };
    });
    const filterModalContentAniamtedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          filterModalSharedValue2.value,
          [SIZES.height, 0],
          [0, 1],
        ),
        transform: [
          {
            translateY: filterModalSharedValue2.value,
          },
        ],
      };
    });
    function renderFooter() {
      return (
        <View
          style={{
            position: 'absolute',
            // flexDirection:'row',
            bottom: 80,
            left: SIZES.padding,
            right: SIZES.padding,
            height: 40,
            // backgroundColor:COLORS.green,
            marginTop: SIZES.padding,
            // marginBottom:30,
            paddingHorizontal: SIZES.padding,
          }}>
          {/* Apply */}
          <TextButton
            buttonContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              marginLeft: SIZES.radius,
              borderColor: COLORS.secondaryALS,
              borderWidth: 1,
              backgroundColor: COLORS.secondaryALS,
            }}
            label="Apply"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            onPress={() => {
              applyFilterFunc(selected)
              filterModalSharedValue2.value = withTiming(SIZES.height, {
                duration: 500,
              });
              filterModalSharedValue1.value = withDelay(
                500,
                withTiming(SIZES.height, {
                  duration: 100,
                }),
              );
            }}
          />
        </View>
      );
    }
    return (
      //Main Container
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            height: SIZES.height,
            width: SIZES.width,
          },
          filterModalContainerAniamtedStyle,
        ]}>
        {/* Background Container */}
        <Animated.View
          style={[
            {
              flex: 1,
              height: SIZES.height,
              width: SIZES.width,
              backgroundColor: COLORS.transparentBlack7,
            },
            filterModalBackgroundAniamtedStyle,
          ]}>
          {/* Content Container */}
          <Animated.View
            style={[
              {
                position: 'absolute',
                bottom: 0,
                height: SIZES.height * 0.8,
                width: SIZES.width,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: COLORS.white,
              },
              filterModalContentAniamtedStyle,
            ]}>
            {/* Header */}
            <View
              style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
              }}>
              <View
                style={{
                  width: 60,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  ...FONTS.h1,
                }}>
                Filter
              </Text>
              <TextButton
                label="Cancel"
                buttonContainerStyle={{
                  width: 60,
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.black,
                  ...FONTS.body3,
                }}
                onPress={() => {
                  filterModalSharedValue2.value = withTiming(SIZES.height, {
                    duration: 500,
                  });
                  filterModalSharedValue1.value = withDelay(
                    500,
                    withTiming(SIZES.height, {
                      duration: 100,
                    }),
                  );
                }}
              />
            </View>
            {/* Content */}
            <View
              style={{
                paddingHorizontal: SIZES.padding,
              }}>
              <Text h3 gray>Flight</Text>
              <FilterItem
                name="ALL"
                //icon={icons.burger}
                isSelected={selected == 'ALL'}
                onPress={() => {
                  setSelect('ALL');
                }}
              />
              <FilterItem
                name="ALSC"
                //icon={images.alsc}
                isSelected={selected == 'ALSC'}
                onPress={() => {
                  setSelect('ALSC');
                }}
              />
              <FilterItem
                name="ACSV"
               //icon={images.acsv}
                isSelected={selected == 'ACSV'}
                onPress={() => {
                  setSelect('ACSV');
                }}
              />
                  <FilterItem
                name="NCTS"
                //icon={images.ncts}
                isSelected={selected == 'NCTS'}
                onPress={() => {
                  setSelect('NCTS');
                }}
              />
                 {/* <Text h3 gray>Cargo Terminal</Text>
                 <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginTop:SIZES.base,

                    }}
                 >
                 <TextButton
                 label='ALL'
                 labelStyle={{
                    color: cargoTerminal==0? COLORS.gray2: COLORS.primaryALS,
                 }}
                 onPress={()=>setCargoTerminal(0)}
                 buttonContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingVertical:SIZES.base,
                    borderRadius:SIZES.radius,
                    backgroundColor: cargoTerminal==0? COLORS.primaryALS: COLORS.white,
                    borderColor:COLORS.gray2,
                    borderWidth:1
                 }}
                
                 />
                      <TextButton
                 label='ALSC'
                 labelStyle={{
                    color: cargoTerminal==1? COLORS.gray2: COLORS.primaryALS,
                 }}
                 onPress={()=>setCargoTerminal(1)}
                 buttonContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingVertical:SIZES.base,
                    borderRadius:SIZES.radius,
                    backgroundColor: cargoTerminal==1? COLORS.primaryALS: COLORS.white,
                    borderColor:COLORS.gray2,
                    borderWidth:1
                 }}
                 />
                      <TextButton
                 label='ACSV'
                 onPress={()=>setCargoTerminal(2)}
                 labelStyle={{
                    color: cargoTerminal==2? COLORS.gray2: COLORS.primaryALS,
                 }}
                 buttonContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingVertical:SIZES.base,
                    borderRadius:SIZES.radius,
                    backgroundColor: cargoTerminal==2? COLORS.primaryALS: COLORS.white,
                    borderColor:COLORS.gray2,
                    borderWidth:1
                 }}
                 />
                      <TextButton
                 label='NCTS'
                 onPress={()=>setCargoTerminal(3)}
                 labelStyle={{
                    color: cargoTerminal==3? COLORS.gray2: COLORS.primaryALS,
                 }}
                 buttonContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingVertical:SIZES.base,
                    borderRadius:SIZES.radius,
                    backgroundColor: cargoTerminal==3? COLORS.primaryALS: COLORS.white,
                    borderColor:COLORS.gray2,
                    borderWidth:1
                 }}
                 />
                 </View> */}
                
            </View>
       
  
            {/* Footer */}
            {renderFooter()}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  };
  export default FilterModal;
  