import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SignupScreen({navigation}) {

  const [signup_name, setSignUpName] = useState("")
  const [signup_password, setSignUpPassword] = useState("")
  const [signup_confirm, setSignUpConfirm] = useState("")
  const [date, setDate] = useState("2022-06-15")
  const [value, setValue] = React.useState('male');

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>

      <View style={{backgroundColor:"dodgerblue", width:"100%", alignItems:"center", padding:10, paddingTop:40}}>
        <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}><Icon name="person_add" size={20} color="white" style={{}}/> Sign Up</Text>
        
      </View>

      <ScrollView style={{width:"95%"}}>
        
        <View style={{borderWidth:1, padding:8, borderRadius:10, borderColor:"lightgrey", width:"100%", marginTop:20}}>

          <Text>First Name:</Text>
          <TextInput placeholder="e.g: Faiq" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Last Name:</Text>
          <TextInput placeholder="e.g: Shahzad" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Email:</Text>
          <TextInput placeholder="e.g: abcdef@gmail.com" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Password:</Text>
          <TextInput placeholder="********" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Confirm Password:</Text>
          <TextInput placeholder="********" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Phone Number:</Text>
          <TextInput placeholder="e.g: 0333-5558444" style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}}></TextInput>
          <Text style={{marginTop:15}}>Date of Birth:</Text>
          
          <DatePicker style={{width: "100%"}} date={date} mode="date" placeholder="select date" format="YYYY-MM-DD" minDate="2022-05-01" maxDate="2023-06-01" confirmBtnText="Confirm"
            cancelBtnText="Cancel" customStyles={{ dateIcon: {position: 'absolute', left: 0, top: 4, marginLeft: 0}, dateInput: { marginLeft: 36, borderRadius:5, borderColor:"lightgrey"} }} />

          <Text style={{marginTop:15}}>Gender:</Text>

          <View style={{borderColor:"lightgrey", borderWidth:1, borderRadius:10}}>
          <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item mode='android' label="Male" labelStyle={{fontSize:13}} value="male" color='red' />
            <RadioButton.Item mode='android' label="Female" labelStyle={{fontSize:13}} value="female" color='red' />
            <RadioButton.Item mode='android' label="Custom" labelStyle={{fontSize:13}} value="custom" color='red' />
          </RadioButton.Group>
          </View>

          <Text style={{marginTop:15}}>Profile Picture:</Text>
          <TouchableOpacity style={{alignItems:"center", backgroundColor:"antiquewhite", padding:5, borderRadius:5, borderWidth:1, borderColor:"lightgrey", marginTop:5}}>
            <Text style={{fontSize:12}}>Upload Image</Text></TouchableOpacity> 
        </View>
        <Button mode='contained' style={{marginTop:20, padding:5}}>Sign Up</Button> 

        <Text style={{marginTop:30, textAlign:"center"}}>Already have an account?</Text>
        <Button mode='outlined' style={{marginTop:20, padding:5}} onPress={() => NavigationPreloadManager.navigate("Login")}>Login</Button> 
      </ScrollView>

    </View>

  );


}