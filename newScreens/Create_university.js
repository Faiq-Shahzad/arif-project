import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export function Create_university({navigation}) {

    const [name, setName] = React.useState();
    const [address, setAddress] = React.useState();
    const [Email, setEmail] = React.useState();
    const [contact, setContact] = React.useState();

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Name:</Text>
                </View>
                <TextInput multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}} value = {name} onChangeText = {()=>setName}/>
     
                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Address:</Text>
                </View>
                <TextInput multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}}  value = {address} onChangeText = {()=>setAddress}/>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Email:</Text>
                </View>
                <TextInput multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}}  value = {Email} onChangeText = {()=>setEmail}/>
                
                <View style={{ borderRadius:10, padding:1, marginTop:10}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Contact Number:</Text>
                </View>
                <TextInput multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}}  value = {contact} onChangeText = {()=>setContact}/>

                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}}>
                        <Text>FINISH</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}