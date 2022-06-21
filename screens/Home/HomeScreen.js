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
  Linking,
} from 'react-native';
import icons from '../../constants/icons';
import Text from '../../constants/Text';
import TextButton from '../../components/TextButton'
import OptionItem from '../../components/OptionItem';
import CategoryCard from '../../components/CategoryCard';
import { getTenant } from '../../api/loginApi';
import { connectToRedux } from '../../utils/ReduxConnect';
import moment from 'moment';
import AppActions from '../../stores/actions/AppActions';
import PersistentStorageActions from '../../stores/actions/PersistentStorageActions';
import DatePicker from '../../components/DatePicker/DatePicker';import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const HomeScreen = ({navigation,logoutAsync,setTenant}) => {
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
const LogOutHandle = async () =>{
  console.log(' logoutAsync()')
  await GoogleSignin.signOut();
  //logoutAsync()

}
const SetTenantHandle = ()=>{
  getTenant('ALSW_UAT').then(({ success, ...data }) => {
    console.log('getTenant###########################',data)
    setTenant(data);
    //toggleTenantSelection();
  });
}
  function renderHeader() {
    return (
      <View
        style={{
          height: 130,
          backgroundColor: COLORS.primaryALS,
         // borderBottomLeftRadius: 45,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            justifyContent:'space-between',
          
            //backgroundColor:COLORS.red,
            marginTop: SIZES.base,
          }}>
          {/* Avartar */}
          <TouchableOpacity
          onPress={LogOutHandle}>
          <Image
            source={icons.filter}
            style={{
              resizeMode: 'contain',
              width: 25,

              height: 25,
              tintColor:COLORS.white
            }}
          />
          </TouchableOpacity>
        
          <View
            style={{
              //flex: 1,
              marginLeft: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text h3 white>
             Home
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Notifications')
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
        <View
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
        </View>
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
      <ScrollView
          contentContainerStyle={
            {
              //paddingBottom: 30,
            }
          }>

        
        </ScrollView>
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

export default connectToRedux({
  component: HomeScreen,
  stateProps: state => ({
  }),
  dispatchProps: {
    logoutAsync: AppActions.logoutAsync,
    setTenant: PersistentStorageActions.setTenant,
  },
});
