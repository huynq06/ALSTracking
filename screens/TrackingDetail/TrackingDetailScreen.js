import React, {useEffect, useState, useCallback} from 'react';
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
import Tabs from "../../components/Tabs";
import TextButton from "../../components/TextButton";
import ItemSeparator from "../../components/ItemSeparator";
import Tracing from './Tracing';
const TrackingDetailScreen = () =>{
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const tabs = ['GENERAL', 'TRACKING', 'CUSTOM'];
    const onSelectTab = index => {
        setCurrentTabIndex(index);
        // props.onSelectDate(dates[index]);
      };
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
      function renderTitle() {
        return(
            <View>
             <View
                style={{
                    backgroundColor: COLORS.lightGray2,
                    paddingVertical:SIZES.base
                }}
            >
            <View
              style={{
                flexDirection: 'row',
           
                paddingHorizontal:SIZES.padding,
                marginTop:SIZES.base
              }}>
              <Text
                darkGray
                h2
                style={{
                  flex: 1,
                }}>
                HW5HOW354H
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
            <Text style={{
                paddingHorizontal:SIZES.padding
            }}>
                Yusen Logistics
            </Text>
            
            </View>
            <ItemSeparator
              customContainerStyle={{
                //marginTop: SIZES.base,
                //marginBottom: SIZES.base,
                backgroundColor:COLORS.gray
              }}
            />
        </View>
        )
        
      }
      function renderSearchResult() {
        return (
            <>
           
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              marginTop: SIZES.padding,
            }}>
            
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
          </>
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
    return(
        <View
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
               {renderHeader()}
               {renderTitle()}
               <View>
               <Tabs
        tabs={tabs}
        currentTabIndex={currentTabIndex}
        onSelectTab={onSelectTab}
      />
               </View>
               {currentTabIndex == 0 && (
        <View
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            //   alignItems:'center'
          }} // Do not adjust content automatically
        >
          {renderBody()}
        </View>
      )}
     {currentTabIndex == 1 && (
        <View
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            //   alignItems:'center'
          }} // Do not adjust content automatically
        >
         <Tracing />
        </View>
      )}
       {currentTabIndex == 2 && (
        <View
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            //   alignItems:'center'
          }} // Do not adjust content automatically
        >
      
        </View>
      )}
        </View>
    )
}

export default TrackingDetailScreen;