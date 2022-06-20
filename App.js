import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/login.js";
import SignupScreen from "./components/signup.js";
import PatientHome from "./components/patienthome.js";
import DoctorHome from "./components/doctorhome.js";
import MakeAppointment from './components/makeappointments.js';

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>

      <ImageBackground style={{flex: 1, alignItems:"center", width:"100%"}} source={{uri:"https://img.lovepik.com/background/20211029/medium/lovepik-flat-health-medical-service-hd-background-image_605816816.jpg"}} resizeMode="cover">

        <View style={{alignItems:"center", padding:13, backgroundColor:'rgba(255, 61, 61, 0.5)', marginTop:"30%", borderRadius:20}}>
          <View style={{flexDirection:"row", marginBottom:"20%"}}>
            <Text style={{fontSize:50, fontWeight:"bold", color:"dodgerblue"}}>MeD</Text>
            <Text style={{fontSize:50, fontWeight:"bold", color:"white"}}>Com</Text>
          </View>
          <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"green", width:"70%"}} onPress={()=> navigation.navigate("Login")}>Login</Button>
          <Text style={{color:"grey"}}>__________________________________________</Text>
          <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"blue", width:"65%"}} onPress={()=> navigation.navigate("Signup")}>Sign Up</Button>
        </View>
      </ImageBackground>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Patient Home" component={PatientHome} options={{ title: 'PATIENT' }}/>
        <Stack.Screen name="Doctor Home" component={DoctorHome} options={{ title: 'DOCTOR' }}/>
        <Stack.Screen name="Make Appointment" component={MakeAppointment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;