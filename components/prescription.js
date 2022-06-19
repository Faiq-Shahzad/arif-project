import React, { useState } from 'react';
import { Text,TextInput, ScrollView, TouchableOpacity, View, Alert, Button, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Prescription({navigation}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={{alignItems:"center", padding:10, paddingHorizontal:25, borderRadius:10, marginHorizontal:15, backgroundColor:"green"}} onPress={()=>{Alert.alert("Data Submitted", "YEAAAH!")}}>
                    <Text style={{color:"white", fontSize:15}}>Submit</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    const [diagnosis, setDiagnosis] = useState();
    
    const [medicineName, setMedicineName] = useState("");
    const [amountDay, setAmountDay] = useState("");
    const [totalDays, setTotalDays] = useState("");
    const [prescription, setPrescription] = useState([{key:1, medicine:"Panadol", amountDay:2, totalDays:7}]);
    
    const [recommendation, setRecommendation] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState()

    const setAmountDayText = (text) => {
        setAmountDay(text.replace(/[^0-9]/g, ''))
    }
    const setTotalDaysText = (text) => {
        setTotalDays(text.replace(/[^0-9]/g, ''))
    }

    const addPrescription = () => {
        if(medicineName === "" || amountDay === "" || totalDays === ""){
            Alert.alert("Missing Fields", "Please fill all the fields")
            return
        }
        setPrescription([...prescription, {key:Math.random(), medicine:medicineName.trim(), amountDay:amountDay, totalDays:totalDays}]);
    };
    const deletePrescription = (key) => {
        const newList = prescription.filter( el => el.key!=key)
        setPrescription(newList)
    };


    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date)
        hideDatePicker();
    };

  return (
    <SafeAreaView style={{flex:1, padding:25, backgroundColor:"lightgray"}}>
        <View style={{marginTop:5, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,1)', padding:2, borderRadius:2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        
        elevation: 5,}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <MaterialCommunityIcons style={{width:'10%'}} name="account-injury" size={30} color={'red'} />
                <TextInput  placeholderTextColor={'gray'} style={{width:'70%', color:'black', borderColor:'gray', borderBottomWidth:1, marginBottom:10, marginHorizontal:15}} placeholder="Diagnosis" onChangeText={setDiagnosis}></TextInput>
            </View>
        </View>
      <View style={{marginTop:10, backgroundColor:'rgba(255,255,255,1)', padding:10, borderRadius:30, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        
        elevation: 5,}}>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <MaterialCommunityIcons style={{marginHorizontal:10}} name="medical-bag" size={30} color={'red'} />

                <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>Prescription</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TextInput placeholderTextColor={'gray'} style={{ width:'100%', backgroundColor:"rgba(0,0,0,0.2)", color:'black', paddingHorizontal:25, marginVertical:5, borderRadius:25}} placeholder="Medicine Name" value={medicineName}  onChangeText={setMedicineName}></TextInput>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%',}}>
                    <TextInput keyboardType='numeric' placeholderTextColor={'gray'} style={{width:'35%',backgroundColor:"rgba(0,0,0,0.2)", color:'black', paddingHorizontal:15,  marginVertical:5, borderRadius:25}} placeholder="Qty" value={amountDay} onChangeText={(text)=>setAmountDayText(text)}></TextInput>
                    <TextInput keyboardType='numeric' placeholderTextColor={'gray'}style={{width:'35%',backgroundColor:"rgba(0,0,0,0.2)", color:'black', paddingHorizontal:15, marginVertical:5, borderRadius:25}} placeholder="Days" value={totalDays} onChangeText={(text)=>setTotalDaysText(text)}></TextInput>
                    <TouchableOpacity
                        style={{ width:'20%',backgroundColor: 'grey', padding: 10, justifyContent:"center", alignItems:"center", borderRadius:10}}
                        onPress={addPrescription}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
      </View>
        

    <View style={{marginTop:10, backgroundColor:'rgba(255,255,255,1)', padding:10, borderRadius:30, shadowColor: "#000",
                shadowOffset: {width: 0,height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 4.84,
                elevation: 5,}}>

        <View style={{justifyContent:'center', alignItems:'center'}}>
            <TextInput placeholderTextColor={'gray'} style={{ width:'100%', backgroundColor:"rgba(0,0,0,0.2)", color:'black', paddingHorizontal:25, marginVertical:5, borderRadius:25}} placeholder="Recommendation" onChangeText={setRecommendation}></TextInput>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%',}}>
                <View style={{flexDirection:'row', width:"100%", justifyContent:'space-around', alignItems:"center", marginTop:10}}>
                    <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>Follow up</Text>
                    <TouchableOpacity style={{alignItems:"center", padding:10, paddingHorizontal:25, borderRadius:10, backgroundColor:"green"}} onPress={showDatePicker}>
                    <Text style={{color:"white", fontSize:15}}>{selectedDate?selectedDate.toLocaleDateString():'Select Date'}</Text>
                    </TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    />
            </View>
        </View>
        
    </View>

    {prescription.length > 0 && 
      <View
        style={{ 
            minHeight:'0%',
            maxHeight:'40%',
            borderRadius: 45,
            overflow: 'hidden',
            marginTop:10, backgroundColor:'rgba(255,255,255,1)', padding:15, paddingBottom:20, overflow: 'hidden', borderRadius:10, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,
    
            elevation: 5
        }}
        >
      <ScrollView style={{}}>
        {prescription.map((prescriptionData, index) => {
          return (
            <>
            <View style={{flexDirection:"column", backgroundColor: 'rgba(0,0,255,0.5)' ,justifyContent:"space-between", width:"100%", padding:10, borderRadius:20, marginBottom:10}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:5}}>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        Medicine:  {prescriptionData.medicine}
                    </Text>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        
                    </Text>
                    <TouchableOpacity
                        onPress={() => deletePrescription(prescriptionData.key)}>
                        <MaterialCommunityIcons name="delete-sweep" size={30} color={'rgba(200,0,0,1)'} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        Quantity:
                    </Text>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        {prescriptionData.amountDay}
                    </Text>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        Total Days:
                    </Text>
                    <Text style={{ marginRight:35,fontSize: 20, color: 'white'}}>
                        {prescriptionData.totalDays}
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                </View>
            
            </View>
            </>
            
          );
        })}
      </ScrollView>
      </View>
    }
      
    </SafeAreaView>
  );
}


