import React,{useState} from "react";
import {
    ScrollView,StyleSheet,Text,View
    
} from 'react-native'
import moment from 'moment'
import Dates from "./Dates";

const HorizontalCalendar = ({onSelectDate}) =>{
    const showDaysBeforeCurrent = 2;
    const showDaysAfterCurrent = 2;
    const getDates = () =>{
        const currentDate = moment();
        const startDay = moment().subtract(showDaysBeforeCurrent + 1,'days')

        //number of day in total
        const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;
        return [...Array(totalDaysCount)].map(_=>startDay.add(1,'day').clone());
    }
    const listDate = getDates();
    const [allDatesHaveRendered,setAllDatesHaveRendered] = useState(false);
   const [currentDateIndex,setCurrentDateIndex] = useState(showDaysBeforeCurrent)
   const [dates,setDate] = useState(listDate);
   const [dayWidths,setDayWidths] = useState();
   const [scrollPositionX,setScrollPositionX] = useState(0);
   const [visibleMonths,setVisibleMonths] = useState();
   const [visibleYears,setVisibleYears] = useState();
  
  
   let _scrollView;

  const onSelectDay = (index) => {
    
    setCurrentDateIndex(index);
    onSelectDate(dates[index]);
  };
   const onRenderDay = (index, width) => {
    // Check whether all date have been rendered already
    const allDatesHaveRendered = dayWidths
      && Object.keys(dayWidths).length >= showDaysBeforeCurrent + showDaysAfterCurrent;

      setDayWidths(prevState => ({
      allDatesHaveRendered,
      dayWidths: {
        // keep all existing widths added previously
        ...prevState.dayWidths,
        // keep the index for calculating scrolling position for each day
        [index]: width,
      },
    }));
  };

    return(
        <View>
        {/* <Text style={styles.visibleMonthAndYear}>
          November, 2020 // random month and year for now
        </Text> */}
        <ScrollView
          ref={scrollView => { _scrollView = scrollView; }}
          horizontal={true}                         // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
        >
            <Dates
            dates={dates}
            currentDateIndex={currentDateIndex}
            onSelectDay={onSelectDay}
            onRenderDay={()=>{onRenderDay}}
          />
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
    visibleMonthAndYear: {
      color: 'rgba(255, 255, 255, 0.5)',
      paddingHorizontal: 15,
      textAlign: 'left',
    },
  });
export default HorizontalCalendar;