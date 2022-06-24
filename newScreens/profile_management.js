import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


export function Profile_management({navigation}) {
    
 return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
        
        <TouchableOpacity onPress={()=>{navigation.navigate("Update Profile");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:50}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Update Profile</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={{alignItems:"center",  borderRadius:10,  padding:10,}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Delete Profile</Text>
            </View>
        </TouchableOpacity>

    </View>
  );
}