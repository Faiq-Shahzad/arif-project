import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, TextInput, Image} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Profile({navigation}) {
  const [signup_name, setSignUpName] = useState("")
  const [signup_password, setSignUpPassword] = useState("")
  const [signup_confirm, setSignUpConfirm] = useState("")
  const [details, setDetails] = useState({"name":"Faiq Shahzad", "email":"faiqshahad933@gmail.com", "phn_number":"0331-5558407", "dob":"15-06-2001", })
  const [disabled, setDisabled] = useState(true)

  const edit = () =>{
    setDisabled(false);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <ScrollView style={{width:"95%"}}>
        
        <View style={{borderWidth:1, padding:8, borderRadius:10, borderColor:"lightgrey", width:"100%", marginTop:20}}>
          <TouchableOpacity onPress={edit}><Icon style={{alignSelf:"flex-end"}} name="edit" size={24} color="black"/></TouchableOpacity>
          <Image style={{width: 150, height: 150, alignSelf:'center', borderRadius:100}}
                source={{ uri: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}}/>
          <Text>Full Name:</Text>
          <TextInput style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}} value={details.name} editable={!disabled}></TextInput>
          <Text style={{marginTop:15}}>Email:</Text>
          <TextInput style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}} value={details.email} editable={!disabled}></TextInput>
          <Text style={{marginTop:15}}>Phone Number:</Text>
          <TextInput style={{marginTop:5, borderColor:"lightgrey", borderRadius:5, borderWidth:1, padding:3}} value={details.phn_number} editable={!disabled}></TextInput>
        </View>
        <Button mode='outlined' style={{marginTop:20, padding:5, borderColor:"blue"}} disabled={disabled}>Update</Button> 
      </ScrollView>

    </View>

  );
}