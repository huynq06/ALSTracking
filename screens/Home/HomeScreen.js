import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import dummyData from '../../constants/dummyData';
import images from '../../constants/images';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import OptionItem from '../../components/OptionItem';
import CategoryCard from '../../components/CategoryCard';
const HomeScreen = ({navigation}) => {
  const pageID = 100063781500462; // Waltmart's ID 
  const scheme = Platform.select({ ios: 'fb://profile/', android: 'fb://page/' });
  const url = `${scheme}${pageID}`;
  const handleOpenLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch {
      throw new Error('URI cant open:' + url);
    }
  };
  function renderHeader() {
    return (
      <View
        style={{
          height: 140,
          backgroundColor: COLORS.primaryALS,
          borderBottomLeftRadius: 45,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            //backgroundColor:COLORS.red,
            marginTop: SIZES.padding,
          }}>
          {/* Avartar */}
          <Image
            source={images.avartar}
            style={{
              resizeMode: 'contain',
              width: 50,

              height: 50,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text h3 white>
              Xin chào, Admin
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={()=>{handleOpenLink('fb://profile/100063781500462')}}
            >
            <Image
              source={icons.notification}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>

          {/* Name */}
          {/* NotifiIcon */}
        </View>
      </View>
    );
  }
  function renderAdvertise() {
    return (
      <View
        style={[
          {
            marginHorizontal: SIZES.padding,
            borderRadius: 15,
            paddingHorizontal: SIZES.padding,
            paddingBottom: SIZES.padding,
            backgroundColor: COLORS.white,
          },
          styles.shadow,
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.shadow}>
            {/*    <Image
              source={images.skiVilla}
              resizeMode="cover"
              style={{
                width: 70,
                height: 70,
                borderRadius: 15,
              }}
            /> */}
          </View>

          <View
            style={{
              marginTop: SIZES.radius,
              justifyContent: 'center',
              flexDirection: 'row',
              // backgroundColor:'red',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              paddingBottom: SIZES.radius,
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 2,
                borderRightColor: COLORS.gray,
              }}>
              <Text red h3>
                Đang chờ{' '}
              </Text>
              <Text red body3>
                5{' '}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text green h3>
                Đã trả{' '}
              </Text>
              <Text green body3>
                7{' '}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingTop: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            h3
            style={{
              color: COLORS.lightOrange,
            }}>
            Đang theo dõi{' '}
          </Text>
          <Text green body3>
            7{' '}
          </Text>
        </View>
      </View>
    );
  }
  function renderFunction() {
    const renderItem = ({item, index}) => (
      <OptionItem
        key={index}
        icon={item.icon}
        bgColor={item.bgColor}
        label={item.description}
        //   containerStyle={{
        //       backgroundColor:COLORS.red
        //   }}
        onPress={() =>
          navigation.navigate(item.srceenNavigagor, {
            screen: item.srceenNavigagor,
          })
        }
      />
    );
    return (
      <FlatList
        data={dummyData.featuresImpData}
        numColumns={4}
        listKey={(item, index) => 'D' + index.toString()}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
          backgroundColor: '#F2F2F2',
          flex: 1,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginTop: SIZES.padding,
        }}
        //  keyExtractor={(item) => `Imp-${item.id}`}
        renderItem={renderItem}
        style={{marginTop: SIZES.padding}}
      />
    );
  }
  function renderNotice(){
    return(
        <View
            style={{
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                padding:20,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primaryALS,
                ...styles.shadow
            }}
        >
            <Text style={{color:COLORS.white,...FONTS.h2}}>Tham gia ngay!</Text>
            <Text style={{marginTop:SIZES.base,
                    color:COLORS.white,...FONTS.body3,lineHeight:18
                }}>Tham gia cộng đồng facebook để được giải đáp các thắc mắc và cùng nhau trao đổi kinh nghiệm.</Text>
                      <TouchableOpacity
                        style={{
                            marginTop:SIZES.base
                        }}
                        onPress={()=>{handleOpenLink('fb://profile/100063781500462')}}
                      >
                          <Text style={{textDecorationLine:'underline',color:COLORS.green,...FONTS.h3}}>Tham gia</Text>
                      </TouchableOpacity>
        </View>
    )
}
  function renderService() {
    return (
      <View
        style={{
          //marginTop: SIZES.padding,
          backgroundColor: COLORS.white,
          padding: SIZES.padding,
        }}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text h3 gray>
            Dịch vụ cung cấp
          </Text>
        </View>
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey="Categories"
          keyExtractor={item => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <CategoryCard
              sharedElementPrefix="Home"
              category={item}
              containerStyle={{
                marginLeft: index == 0 ? 0 : SIZES.base,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() =>
                navigation.navigate('News', {
                  url: item.uri,
                  title: 'Dịch vụ',
                  //sharedElementPrefix: 'Home',
                })
              }
            />
          )}
        />
      </View>
    );
  }
  function renderNews() {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text h3 gray>
            Tin tức
          </Text>
        </View>
        <FlatList
          horizontal
          data={dummyData.news}
          listKey="Categories"
          keyExtractor={item => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <CategoryCard
              sharedElementPrefix="Home"
              category={item}
              containerStyle={{
                marginLeft: index == 0 ? 0 : SIZES.base,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() =>
                navigation.navigate('News', {
                  url: item.uri,
                  title: 'Tin tức',
                  //sharedElementPrefix: 'Home',
                })
              }
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
        backgroundColor: '#F2F2F2',
      }}>
      {renderHeader()}
      {/* Main */}
      <View
        style={{
          position: 'absolute',
          //backgroundColor:COLORS.red,
          height: 500,
          //flex:1,
          top: 90,
          left: 0,
          right: 0,
        }}>
        <ScrollView
          contentContainerStyle={
            {
              //paddingBottom: 30,
            }
          }>
          {/* Advertise */}
          {renderAdvertise()}
          {/* Function */}
          {renderFunction()}
          {/* Facebook */}
          {renderNotice()}
          {renderService()}
          {renderNews()}
        </ScrollView>
      </View>
    </View>
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
export default HomeScreen;
