import React, {useState, useEffect} from 'react';
import { Text, View, Image,FlatList, Alert, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MakeAppointment from './makeappointments.js';
import RecentAppointments from './recentappointments.js';
import Prescription from './prescription.js';
import Profile from './profile';
import StarRating from 'react-native-star-rating';


function SearchDoctors({navigation}){
    const [doctors, getDoctors] = useState([{"name":"Faiq Shahzad", "speciality":"MBBS | Surgeon", "time":"11:00 - 1550", "star":"3.5"},{"name":"Fazal Khan", "speciality":"MBBS | Biologist", "time":"800 - 1200", "star":"4.7"}]);

    // const onStarRatingPress = (rating) => {
    //   this.setState({
    //     starCount: rating
    //   });
    // }
  

    return(
      <View style={{flex:1, marginTop:10, alignItems:"center"}}>
        <View style={{flexDirection:"row", width:"85%", marginTop:30}}>
            <MaterialCommunityIcons name="account-search" size={30} 
            style={{
              backgroundColor:'white',
              padding:10,
              marginRight:10,
              borderRadius:30,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.84,
              elevation: 5,}} color="grey" />
            <TextInput
            style={{
              width:'80%',
              backgroundColor:'white',
              paddingHorizontal:20,
              borderRadius:30,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.84,
              color:'gray',
              elevation: 5,}}
            placeholderTextColor="gray"
            placeholder="Search">
            </TextInput>
        </View>

            <TouchableOpacity style=
            {{marginTop:10, width:'90%', backgroundColor:'rgba(255,255,255,1)', padding:10, borderRadius:30, shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4.84,
              
              elevation: 5,}}
             onPress={()=> navigation.navigate("Make Appointment")}>
                <View style={{width:"100%", justifyContent:'center'}}>
                {/* <View style={{width:"85%", borderRadius:20, backgroundColor:"red", justifyContent:'center', padding:10}}> */}
                <View style={{flexDirection:'row'}}>
                    <View style={{}}>
                      <Image style={{width: 100, height: 100, alignSelf:'center', borderRadius:100, marginTop:10}}
                        source={{ uri: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}}/>
                    </View>
                    <View style={{paddingLeft:25}}>
                      <Text style={{fontSize:17, fontWeight:"bold", color:"red", marginVertical:10}}>Dr. {element.name}</Text>

                      <Text style={{fontSize:16, fontFamily:"sans-serif", color:"blue", marginRight:15}}>{element.speciality}</Text>
                      
                      <View style={{flexDirection:"row", marginTop:5, alignItems:'center'}}>
                          <MaterialCommunityIcons name="clock-time-three" size={24} color="blue" />
                          <Text style={{marginLeft:5, fontSize:16, fontFamily:"sans-serif", color:"blue"}}>{element.time}</Text>
                      </View>

                      <View style={{flexDirection:"row", justifyContent:'flex-start', marginTop:5}}>
                          <Text style={{fontSize:16, fontFamily:"sans-serif", color:"blue", marginRight:10}}>Rating</Text>
                          <StarRating
                              disabled={true}
                              maxStars={5}
                              rating={element.star}
                              starSize={20}
                              starStyle={{color:'blue'}}
                            />
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
  const [patient, setPatient] = useState("patient");

  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator>
        <Tab.Screen name="Search Doctors" component={SearchDoctors} options={{ title: "Doctors", tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="doctor" size={24} color={color} />)}}/>
        <Tab.Screen name="Prescriptions" component={Prescription} options={{ tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="history" size={24} color={color} />)}}/>
        <Tab.Screen name="Profile" component={Profile} initialParams={{patient}} options={{ tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="account" size={24} color={color} />)}}/>
    </Tab.Navigator>
  );
}