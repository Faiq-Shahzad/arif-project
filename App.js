import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  // const {portfolio} = route.params;
  // const data = portfolio.skills;
  const data = [
    {id:1, name:'ahmed', img:'https://www.w3schools.com/w3images/avatar6.png'},
    {id:2, name:'faiq', img:'https://www.w3schools.com/w3images/avatar6.png'},
    {id:3, name:'ali', img:'https://www.w3schools.com/w3images/avatar6.png'},
    {id:4, name:'shahzad', img:'https://www.w3schools.com/w3images/avatar6.png'}

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
        <Text style={{fontSize:32, textAlign:'center', color:'rgba(12,25,150,0.8)', fontWeight:'bold', marginVertical:25}}>Request Patient Access</Text>
        <View style={{flexDirection:'row', marginTop:10, backgroundColor:'rgba(0,0,0,0.6)',justifyContent:'space-between', alignItems:'center',borderRadius:30, paddingHorizontal:25}}>
          <TextInput placeholder='Enter Patient Id' style={{width:'90%'}} />
          <Icon name="search" size={20} color="white" style={{padding:10}}/>
        </View>
        <FlatList
        style={{marginTop:35}}
        data={data}
        renderItem={({ item }) => (
  
           <View key={item.id} style={{flex:1,
              flexDirection:'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius:35,
              height: 85,
              margin: 3,
              backgroundColor: 'rgba(12,25,150,0.6)'}}>
              <View style={{flexDirection:'row', alignItems: 'center', minWidth:150}}>
              <Image
                style={{width: 50,height: 50, borderRadius:50}}
                source={{uri:item.img}}
              />
              <Text style= {{fontSize:18, fontWeight:"bold", color:"white", marginLeft:10}}>{item.id}. {item.name}</Text>
              </View>
              <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.6)', padding:15, borderRadius:25}}><Text style={{fontWeight:'bold'}}>Request Access</Text></TouchableOpacity>
            </View>
        )}
        //Setting the number of column
        numColumns={1}
        keyExtractor={(item, index) => index}
      />
      
    </View>
  );
}
