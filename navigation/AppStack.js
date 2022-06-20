import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PatientHome from "../components/patienthome.js";
import DoctorHome from "../components/doctorhome.js";
import MakeAppointment from '../components/makeappointments.js';
import HandleAppointments from '../components/HandleAppointment';


const Stack = createNativeStackNavigator();

const AppStack=()=>{
  return(
      <Stack.Navigator>
          <Stack.Screen name="Patient Home" component={PatientHome} options={{ title: 'PATIENT' }}/>
          <Stack.Screen name="Doctor Home" component={DoctorHome} options={{ title: 'DOCTOR' }}/>
          <Stack.Screen name="Make Appointment" component={MakeAppointment}/>
          <Stack.Screen name="Handle Appointment" component={HandleAppointments}/>
      </Stack.Navigator>

  );


}

export default AppStack;