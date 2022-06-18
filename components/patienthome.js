import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MakeAppointment from './makeappointments.js';
import RecentAppointments from './recentappointments.js';
import Profile from './profile';


function SearchDoctors({navigation}){
  return(
    <View style={{flex:1, alignItems:"center"}}>
      <TextInput ></TextInput>
      <Text>ABCD</Text>
    </View>
  );

}

export default function PatientHome({navigation}) {

  const Tab = createBottomTabNavigator();

  return (
      
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Search Doctors" component={SearchDoctors} options={{ title: "Doctors", tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="doctor" size={24} color={color} />)}}/>
          <Tab.Screen name="Appointment" component={MakeAppointment} options={{ tabBarIcon:({color})=>(
            <Icon name="add-task" size={24} color={color} />)}}/>
          <Tab.Screen name="Recent" component={RecentAppointments} options={{ tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="history" size={24} color={color} />)}}/>
          <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="account" size={24} color={color} />)}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}