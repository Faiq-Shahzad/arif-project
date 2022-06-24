import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

export function Update_profile({navigation}) {

    const [Password, setPassword] = useState()
    const [email, setEmail] = useState("")

    return (
        <View style={{flex:1,marginLeft:10, marginRight:10}}>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Email:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}}  value={email} onChangeText = {()=>setEmail}/>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Password:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} value={Password} onChangeText = {()=>setPassword}/>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress={()=>{setEmail("");setPassword("")}}>
                    <Text>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}}>
                    <Text>UPDATE</Text>
                </TouchableOpacity>
            </View>
        </View>    
    );
}