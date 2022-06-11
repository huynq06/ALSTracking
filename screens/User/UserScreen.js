import React from 'react'
import { StyleSheet,View,Text } from 'react-native';
import DataList from '../../components/DataList/DataList';
import { getUsers } from '../../api/IdentityAPI';
function UsersScreen({ navigation }) {
    return (
      <>
        <DataList
          navigation={navigation}
          fetchFn={getUsers}
          render={user => (
              <View>
                      <Text>{user.userName}</Text>
                <Text note>{user.email}</Text>
              </View>
         
          )}
        />
     </>
   
    );
  }
  export default UsersScreen;