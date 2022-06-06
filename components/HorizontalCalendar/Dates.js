import React from "react";
import {View,Text} from 'react-native'
import Date from "./Date";

const Dates = ({dates,currentDateIndex,onSelectDay,onRenderDay}) =>{
    return(
        <View
            style={{
                flexDirection:'row'
            }}
        >
            {dates.map((date,index)=>
                <View
                    key={index}
                >
                    <Date
                        date={date}
                        index={index}
                        isActive = {index===currentDateIndex}
                        onPress={onSelectDay}
                        key={index}
                        onRender={onRenderDay}
                    />
                </View>
            )}
        </View>
    )
}

export default Dates