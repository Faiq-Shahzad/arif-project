import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  // const {portfolio} = route.params;
  // const data = portfolio.skills;
  const data = [
    {id:1, name:'ahmed'},
    {id:2, name:'faiq'},
    {id:3, name:'ali'},
    {id:4, name:'shahzad'}

];

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
        <View style={{flexDirection:'row', backgroundColor:'black',justifyContent:'space-between', alignItems:'center',borderRadius:30, paddingHorizontal:25}}>
          <TextInput placeholder='Enter Patient Id' />
          <Icon name="search" size={20} color="white" style={{}}/>
        </View>
        <FlatList
        data={data}
        renderItem={({ item }) => (
  
           <View key={item.id} style={{flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              margin: 3,
              backgroundColor: generateColor()}}>
              <Text style= {{fontSize:18, fontWeight:"bold", color:"white"}}>{item.name}</Text>
            </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
      
    </View>
  );
}
