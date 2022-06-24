import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export function Update_test({navigation}) {

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, marginTop:10}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Question:</Text>
                </View>
                <TextInput multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}} placeholder="Enter the Question"/>
     
                <View style={{justifyContent:"center", alignItems:"center", margin:5}}>
                    <View style={{ borderRadius:10, padding:1, marginTop:10}}>
                        <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Options:</Text>
                    </View>
                    <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Option A"/>
                    <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Option B"/>
                    <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Option C"/>
                    <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Option D"/>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <View style={{margin:1, padding:10, backgroundColor:"lightblue", borderRadius: 10}}>
                       <Text>Corrent Option</Text>
                    </View>
                    <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Correct Option"/>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}}>
                        <Text>FINISH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}