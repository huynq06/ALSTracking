import React from 'react';
import {TouchableOpacity, Text,Image} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';


const IconTextButton = ({label,icon,customContainerStyle,iconStyle,onPress,labelStyle})=>{
    return(
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                ...customContainerStyle
            }}
        
        >
            <Image source={icon}
                style={{
                    width:20,
                    height:20,
                    ...iconStyle
                }}
            />
            <Text style={{
                ...labelStyle
            }}>{label}</Text>
        </TouchableOpacity>
    )
}
export default IconTextButton;