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
import HandleAppointments from './components/HandleAppointment';

const Stack = createNativeStackNavigator();

const AuthStack =  () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown:false }}/>
      <Stack.Screen name="Patient Home" component={PatientHome} options={{ title: 'PATIENT' }}/>
      <Stack.Screen name="Doctor Home" component={DoctorHome} options={{ title: 'DOCTOR' }}/>
      <Stack.Screen name="Make Appointment" component={MakeAppointment}/>
      <Stack.Screen name="Handle Appointment" component={HandleAppointments}/>
    </Stack.Navigator>
  );
}

export default AuthStack
  