import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Alert, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
// import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [signup_name, setSignUpName] = useState("")
  const [signup_password, setSignUpPassword] = useState("")
  const [signup_confirm, setSignUpConfirm] = useState("")
  const [date, setDate] = useState("2022-06-15")
  const [value, setValue] = React.useState('male');

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>

      <View style={{backgroundColor:"dodgerblue", width:"100%", alignItems:"center", padding:10, paddingTop:40}}>
        <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}>Sign Up</Text>
        <Icon name="sign-up" size={20} color="white" style={{}}/>
      </View>

    </View>


}