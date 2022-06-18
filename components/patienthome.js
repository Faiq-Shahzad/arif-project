import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MakeAppointment from './makeappointments.js';
import RecentAppointments from './recentappointments.js';
import Profile from './profile';


function SearchDoctors({navigation}){
    const [doctors, getDoctors] = useState([{"name":"Faiq Shahzad", "speciality":"MBBS | Surgeon", "time":"13:00"}]);
    return(
      <View style={{flex:1, marginTop:10, alignItems:"center"}}>
        <View style={{flexDirection:"row", width:"85%", marginTop:30}}>
            <MaterialCommunityIcons name="account-search" size={30} style={{padding:7}} color="grey" />
            <TextInput style={{width:"80%", borderRadius:30, borderWidth:1, padding:7, backgroundColor:"lightgrey"}} placeholder="Search">
            </TextInput>
        </View>
        
        {doctors.map( (element) =>{
  
          return(


            <TouchableOpacity style={{width:"100%"}} onPress={()=> navigation.navigate("Make Appointment")}>
                <View style={{marginTop:30, width:"100%", alignItems:"center"}}>
                <View style={{width:"85%", borderRadius:20, backgroundColor:"red", justifyContent:'center', padding:10}}>
                    <Text style={{fontSize:17, fontWeight:"bold", color:"white", padding:10, textAlign:"center"}}>Dr. {element.name}</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                    <Text style={{fontSize:16, fontFamily:"sans-serif", color:"darkturquoise"}}>{element.speciality}</Text>
                    <View style={{flexDirection:"row"}}>
                        <MaterialCommunityIcons name="clock-time-three" size={24} color="white" />
                        <Text style={{fontSize:16, fontFamily:"sans-serif", color:"white"}}>{element.time}</Text>
                    </View>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
  
          );
        })}
      </View>
    );
  }
export default function PatientHome({navigation}) {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (

    <Tab.Navigator>
        <Tab.Screen name="Search Doctors" component={SearchDoctors} options={{ title: "Doctors", tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="doctor" size={24} color={color} />)}}/>
        <Tab.Screen name="Recent" component={RecentAppointments} options={{ tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="history" size={24} color={color} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="account" size={24} color={color} />)}}/>
    </Tab.Navigator>
  );
}