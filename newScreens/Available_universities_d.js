import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export function Available_universities_d({navigation}) {
  
    return (
        <View style={{ flex:1, backgroundColor: "grey"}}>
            <View style={{flex:1,flexDirection: "column", alignItems:"center", marginTop: 20, paddingHorizontal: 10}}>
                <TouchableOpacity> 
                    <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 17,  textAlign:"center", height: 50,justifyContent: "center",alignContent:"center", marginBottom: 10, borderRadius:10}}>Comsats</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}