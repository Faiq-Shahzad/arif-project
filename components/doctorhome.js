import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './profile';


function SearchDoctors({navigation}){
    const [appointment, setAppointment] = useState([{"name":"Faiq Shahzad", "speciality":"MBBS | Surgeon", "time":"13:00"}]);
    const [inprogress, setInProgress] = useState([{"name":"Muhammad Ahmed", "speciality":"MBBS | Surgeon", "time":"13:00"}]);
    const [completed, setCompleted] = useState([{"name":"Faiq Shahzad Afzal", "speciality":"MBBS | Surgeon", "time":"13:00"}]);
    const [displayPending, setDisplayPending] = useState(true);
    const [displayInProgress, setDisplayInProgress] = useState(true);
    const [displayCompleted, setDisplayCompleted] = useState(true);

    const confirmAppointment = (key) =>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", 
                onPress: () =>{ inProgress(key) } 

              }
            ]
          );
    }

    const inProgress = (key, index) => {

      appointment.map( (el) =>{
        if (el.key == key){
          setInProgress([...inprogress, el]);
        }
      })

      setAppointment(list => appointment.filter(element => element.key != key))
    
    }

    return(
      <View style={{flex:1}}>
      
        <TouchableOpacity style={{backgroundColor:"black", padding:13, borderWidth:1, borderColor:"lightgrey"}} 
          onPress={()=> (displayPending) ? setDisplayPending(false) : setDisplayPending(true)}>
            <Text style={{marginLeft: 7, color:"white", fontSize:17, fontWeight:"bold"}}>Pending</Text>
        </TouchableOpacity>

        {displayPending ? 
        <ScrollView style={{flex:1, width:"100%", padding:2}}>
          
        {appointment.map( (element, index) =>{
  
          return(
            <TouchableOpacity style={{width:"100%"}} onPress={()=>confirmAppointment(element.key, index)}>
                <View style={{marginTop:20, width:"100%", alignItems:"center"}}>
                  <View style={{flexDirection:"row", width:"85%", borderRadius:20, backgroundColor:"plum", justifyContent:'space-evenly', padding:10}}>
                      <Text style={{fontSize:17, fontWeight:"bold", color:"white", padding:10, textAlign:"center"}}>{element.name}</Text>
                      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                          <MaterialCommunityIcons name="clock-time-three" size={24} color="white" />
                          <Text style={{fontSize:16, fontFamily:"sans-serif", color:"white"}}>{element.time}</Text>
                      </View>
                  </View>
                </View>
            </TouchableOpacity>
          );
        })}
        </ScrollView> : <View style={{width:0, height:0}}></View>}
        
        

        <TouchableOpacity style={{backgroundColor:"black", padding:13, borderWidth:1, borderColor:"lightgrey"}} 
          onPress={()=> (displayInProgress) ? setDisplayInProgress(false) : setDisplayInProgress(true)}>
            <Text style={{marginLeft: 7, color:"white", fontSize:17, fontWeight:"bold"}}>In Progress</Text>
        </TouchableOpacity>

        {displayInProgress ? 
        <ScrollView style={{flex:1, width:"100%", padding:2}}>
          
          {inprogress.map( (element) =>{
    
            return(
              <TouchableOpacity style={{width:"100%"}} onPress={()=> navigation.navigate("Make Appointment")}>
                  <View style={{marginTop:20, width:"100%", alignItems:"center"}}>
                    <View style={{flexDirection:"row", width:"85%", borderRadius:20, backgroundColor:"plum", justifyContent:'space-evenly', padding:10}}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"white", padding:10, textAlign:"center"}}>{element.name}</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                            <MaterialCommunityIcons name="clock-time-three" size={24} color="white" />
                            <Text style={{fontSize:16, fontFamily:"sans-serif", color:"white"}}>{element.time}</Text>
                        </View>
                    </View>
                  </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView> : <View style={{width:0, height:0}}></View>}

        <TouchableOpacity style={{backgroundColor:"black", padding:13, borderWidth:1, borderColor:"lightgrey"}} 
          onPress={()=> (displayCompleted) ? setDisplayCompleted(false) : setDisplayCompleted(true)}>
            <Text style={{marginLeft: 7, color:"white", fontSize:17, fontWeight:"bold"}}>Completed</Text>
        </TouchableOpacity>
        
        {displayCompleted ? 
        <ScrollView style={{flex:1, width:"100%", padding:2}}>
          
          {completed.map( (element) =>{
    
            return(
              <TouchableOpacity style={{width:"100%"}} onPress={()=> navigation.navigate("Make Appointment")}>
                  <View style={{marginTop:20, width:"100%", alignItems:"center"}}>
                    <View style={{flexDirection:"row", width:"85%", borderRadius:20, backgroundColor:"plum", justifyContent:'space-evenly', padding:10}}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"white", padding:10, textAlign:"center"}}>{element.name}</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                            <MaterialCommunityIcons name="clock-time-three" size={24} color="white" />
                            <Text style={{fontSize:16, fontFamily:"sans-serif", color:"white"}}>{element.time}</Text>
                        </View>
                    </View>
                  </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView> : <View style={{width:0, height:0}}></View>}

        
      </View>
    );
  }
export default function DoctorHome({navigation}) {

  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator>
        <Tab.Screen name="Search Doctors" component={SearchDoctors} options={{ title: "Appointments", tabBarIcon:({color})=>(
        <Icon name="check-circle" size={24} color={color} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="account" size={24} color={color} />)}}/>
    </Tab.Navigator>
  );
}