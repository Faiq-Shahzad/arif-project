import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Login() {

  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {login} = useContext(AuthContext);

  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
        <View style={{marginLeft:10, marginRight:10}}>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Email:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} value = {email} onChangeText = {()=>{setEmail}}/>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Password:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} value = {Password} onChangeText = {()=>{setPassword}}/>
        </View>
        <TouchableOpacity onPress = {()=>login(email, Password)}>
            <View style={{flexDirection: "column", alignItems:"center",  borderRadius:5, padding:10, marginTop:20,}}>
                <Text  style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Login </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}