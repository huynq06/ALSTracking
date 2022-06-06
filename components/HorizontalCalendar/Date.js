import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import { COLORS } from "../../constants/theme";
import moment from "moment";
const Date  = ({index,width,isActive,onRender,onPress,date}) =>{
    const today = moment();
    const HandleSelect = () =>{
        onPress(index)
    }
    const onLayout =  () =>{
        onRender(index,width)
    }
 return(
    <TouchableOpacity
    onLayout={()=>{onLayout()}}
    style={{
        //borderBottomColor:'transparent',
        //borderBottomWidth:2,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:15,
        backgroundColor: isActive?  COLORS.orange : 'white',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor: isActive? '#FFFFFF': null
    }}
    onPress={HandleSelect}
    >
        <Text
            style={{
                color: COLORS.primaryALS, 
                textAlign:'center',
                fontSize:12
            }}
        >{date.format('ddd') == today.format('ddd')? "Today" : date.format('ddd').toUpperCase()}</Text>
        <Text style={{
            fontSize:10
        }}>{date.format('DD MMM').toUpperCase()}</Text>
    </TouchableOpacity>
 )
}
export default Date;