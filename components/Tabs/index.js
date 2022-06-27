import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,Text
} from 'react-native';
import Tab from './Tabs';
import { SIZES,COLORS } from '../../constants/theme';
const Tabs = props =>{
    return (
     <View style={styles.container}>
       
       {props.tabs.map((tab, index) =>
       
           <Tab
             tab={tab}
             index={index}
             isActive={index === props.currentTabIndex}
             onPress={props.onSelectTab}
             customContainerStyle = {{
                height:50,
                margin:2,
                //flex:1
                //flex:1
               // width:'30%',
             }}
             // onRender={props.onRenderDay}
             key={index}
           />
       
       )}
     </View>
   );
}

const styles = StyleSheet.create({
 container: {
   flexDirection: 'row',
 //  height:50,
 //  flexWrap:'wrap',
  // marginHorizontal: SIZES.padding,
   width : SIZES.width,
  // justifyContent:'space-around',
   //backgroundColor: COLORS.red,
 },
});

export default Tabs;