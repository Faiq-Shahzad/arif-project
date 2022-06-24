import * as React from 'react';
import { Text, View, ScrollView} from 'react-native';

export function Test_result({navigation}) {


    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>  
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:30}}>
                    <View style={{margintop:30, marginRight:60, padding:10, backgroundColor:"white", borderRadius: 10}}>
                        <Text>Quiz 1</Text>
                    </View>
                    <View style={{margin:10, padding:10, backgroundColor:"white", borderRadius: 10}}>
                        <Text>Marks Quiz1</Text>
                    </View>
                </View>
            </ScrollView>
       </View>
    );
}