import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(true);


  return (
    <View style={{flex: 1, alignItems: 'center'}}>

      <ImageBackground style={{flex: 1, alignItems:"center", width:"100%"}} source={{uri:"https://i.pinimg.com/originals/b9/a5/0a/b9a50af2c61f9337826cd72583ef7335.jpg"}} resizeMode="cover">

        <View style={{backgroundColor:"#db4646", width:"100%", alignItems:"center", justifyContent:"center", padding:10, paddingTop:40, flexDirection:"row"}}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"dodgerblue"}}>MeD</Text>
          <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}>Com</Text>
        </View>
        <View style={{backgroundColor:"dodgerblue", width:"100%", alignItems:"center", padding:10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
          
          <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}><Icon name="login" size={24} color="white" style={{fontWeight:"bold"}}/> Login</Text>
        </View>
          
        <View style={{ marginTop:"auto", marginBottom:"auto"}}>
          <TextInput label="Email" style={{borderColor:"black",borderWidth:1, marginTop:10, width:270}} ></TextInput>
          <TextInput label="Password" style={{borderColor:"black", borderWidth:1, marginTop:10, width:270}}></TextInput>
          <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"green"}} onPress={()=> isDoctor ? navigation.navigate("Doctor Home") : navigation.navigate("Patient Home")}>Login</Button>
        </View>

        <Text style={{color:"grey"}}>__________________________________________</Text>
        <Text style={{marginTop:20}}>Dont have an account?</Text>
        <Button mode='contained' style={{marginTop:20, padding:5, marginBottom:20, borderWidth:1, borderColor:"black", backgroundColor:"rgba(0, 0, 0, 0.25)"}} onPress={()=> navigation.navigate("Signup")}>Sign Up</Button>

      </ImageBackground>
      
      
    </View>
  );
}