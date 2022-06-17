import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  return (
    <View style={{flex: 1, alignItems: 'center'}}>

      <View style={{backgroundColor:"#f52f2f", width:"100%", alignItems:"center", padding:10, paddingTop:40}}>
        <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}>MeDCom</Text>
      </View>
      <View style={{backgroundColor:"dodgerblue", width:"100%", alignItems:"center", padding:10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        
        <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}><Icon name="login" size={24} color="white" style={{fontWeight:"bold"}}/> Login</Text>
      </View>
        
      <View style={{ marginTop:"auto", marginBottom:"auto"}}>
        <TextInput label="Email" style={{borderColor:"black",borderWidth:1, marginTop:10, width:270}} ></TextInput>
        <TextInput label="Password" style={{borderColor:"black", borderWidth:1, marginTop:10, width:270}}></TextInput>
        <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"green"}} onPress={()=> getData()}>Login</Button>
      </View>

      <Text style={{color:"grey"}}>__________________________________________</Text>
      <Text style={{marginTop:20}}>Dont have an account?</Text>
      <Button mode='outlined' style={{marginTop:20, padding:5}} onPress={()=> navigation.navigate("Signup")}>Sign Up</Button>
      
      
    </View>
  );
}