import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export function Available_test_d() {

  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
      <TouchableOpacity>
        <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:30}}>
          <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Quiz 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}