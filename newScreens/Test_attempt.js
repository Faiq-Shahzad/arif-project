import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export function Test_attempt({navigation}) {

    const [question, setQuestion] = React.useState();
    const [optionA, setOptionA] = React.useState();
    const [optionB, setOptionB] = React.useState();
    const [optionC, setOptionC] = React.useState();
    const [optionD, setOptionD] = React.useState();
    const [optionCor, setOptionCor] = React.useState();

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, marginTop:10}}>
                    <Text style={{multiline : 1, paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Question</Text>
                </View>
                <Text multiline={true} style={{borderWidth:1, fontSize: 15, borderColor:"blue", padding:25}}>{question}</Text>
         
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <TouchableOpacity style={{margin:10, marginRight:80, padding:10, backgroundColor:"white", borderRadius: 10}} onPress = {()=>setOptionCor(optionA)}>
                        <Text>{optionA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"white", borderRadius: 10}} onPress = {()=>setOptionCor(optionB)}>
                        <Text>{optionB}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:1}}>
                    <TouchableOpacity style={{margin:10, marginRight:80, padding:10, backgroundColor:"white", borderRadius: 10}} onPress = {()=>setOptionCor(optionC)}>
                        <Text>{optionC}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"white", borderRadius: 10}} onPress = {()=>setOptionCor(optionD)}>
                        <Text>{optionD}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: "row" ,margin:10, marginLeft:200,  padding:10, backgroundColor:"green", borderRadius: 10}}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
       </View>
    );
}