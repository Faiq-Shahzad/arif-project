import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';

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
      
    </View>
  );
}
