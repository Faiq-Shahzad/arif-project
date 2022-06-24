import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

export function Display_university({navigation}) {

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>University name:</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Comsats University</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Address:</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Comsats University Islamabad, Park road</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Email:</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>rector@comsats.edu.pk</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Contact number:</Text>
                </View>

                <View style={{ borderRadius:10, padding:1, marginTop:5}}>
                    <Text style={{ paddingTop:10, width: 200, fontSize: 20,  height: 50}}>051-9247000</Text>
                </View>
            </ScrollView>
        </View>
    );
}