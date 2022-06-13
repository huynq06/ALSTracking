import { useFocusEffect } from "@react-navigation/native";
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, View,FlatList,Button,Text,TouchableOpacity } from 'react-native';
import { debounce } from "../../utils/Debounce";
import { connectToRedux } from "../../utils/ReduxConnect";
import {createTokenSelector} from '../../stores/selectors/PersistentStorageSelectors'
function DataList({
    style,
    navigation,
    fetchFn,
    render,
    maxResultCount = 15,
    token,
    debounceTime = 350,
    ...props
  }) {
    const [records, setRecords] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [skipCount, setSkipCount] = useState(0);
    const [filter, setFilter] = useState('');
    const fetch = (skip = 0, isRefreshingActive = true) => {
      //console.log('da chay vao fetch!!! fetch'+skip )
      if (isRefreshingActive) setLoading(true);
      return fetchFn({ filter, maxResultCount, skipCount: skip })
        .then(({ items, totalCount: total }) => {
          setTotalCount(total);
          setRecords(skip ? [...records, ...items] : items);
          setSkipCount(skip);
        })
        .finally(() => {
          if (isRefreshingActive) setLoading(false);
        });
    };
    const fetchPartial = () => {
    //if (loading || records.length === totalCount) return;
      //console.log('da chay vao fetchPatial')
      setButtonLoading(true);
      fetch(skipCount + maxResultCount, false).finally(() => setButtonLoading(false));
    };
  
    useFocusEffect(
      useCallback(() => {
        setSkipCount(0);
        fetch(0, false);
      }, []),
    );
    useEffect(() => {
      function searchFetch() {
        setSearchLoading(true);
    
        return fetch(0, false).finally(() => setTimeout(() => setSearchLoading(false), 150));
      }
      debounce(searchFetch, debounceTime)();
    }, [filter]);
  
    return (
      <>
        <View style={{
          flex:1
        }}>
          <FlatList
            showsVerticalScrollIndicator
            scrollEnabled
            refreshControl={<RefreshControl refreshing={loading} onRefresh={fetch} />}
            data={records}
            renderItem={({item,index})=>(
              <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'white',flex:1 }}>
              <Text>{item.email}</Text>
             <TouchableOpacity onPress={fetchPartial}>
               <Text>Load More</Text>
             </TouchableOpacity>
            </View>
            )}
          />
        </View>
      </>
    );
  }
  


  
  //const Forwarded = forwardRef((props, ref) => <DataList {...props} forwardedRef={ref} />);
  
  export default connectToRedux({
    component: DataList,
    stateProps: state => ({
      token: createTokenSelector()(state),
    }),
  }); 