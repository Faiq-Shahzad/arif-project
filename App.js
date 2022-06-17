import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:"center", backgroundColor:"#f52f2f"}}>

      <Text style={{fontSize:50, fontWeight:"bold", color:"white", marginBottom:"20%"}}>MeDCom</Text>
      <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"green", width:"65%"}} onPress={()=> getData()}>Login</Button>
      <Text style={{color:"white"}}>__________________________________________</Text>
      <Button mode='contained' style={{marginTop:20, padding:5, backgroundColor:"blue", width:"65%"}} onPress={()=> getData()}>Sign Up</Button>
      
      
    </View>
  );
}