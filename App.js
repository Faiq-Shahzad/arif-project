import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView} from 'react-native';
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
    <View style={{flex: 1, alignItems: 'center', justifyContent:"center", backgroundColor:"#f52f2f"}}>

      <Text style={{fontSize:50, fontWeight:"bold", color:"white", marginBottom:"20%"}}>MeDCom</Text>
      <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"green", width:"65%"}} onPress={()=> navigation.navigate("Login")}>Login</Button>
      <Text style={{color:"white"}}>__________________________________________</Text>
      <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"blue", width:"65%"}} onPress={()=> navigation.navigate("Signup")}>Sign Up</Button>
      
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Patient Home" component={PatientHome} options={{ title: 'HOME' }}/>
        <Stack.Screen name="Doctor Home" component={DoctorHome} options={{ title: 'HOME' }}/>
        <Stack.Screen name="Make Appointment" component={MakeAppointment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;