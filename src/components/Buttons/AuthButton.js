import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text, View, RefreshControl, FlatList, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthButton(props) {
    
  return (
   
        <TouchableOpacity onPress={props.onPress} style={{width:'80%',marginHorizontal:20, marginVertical:props.marginVertical, justifyContent:'center'}}>
        <LinearGradient style={{borderRadius:30,height:55, justifyContent:'center'}} colors={['#23f0c7', '#23f0c7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{textAlign:'center', fontFamily:'Montserrat_400Regular', color:'white', fontSize:16}}>{props.title}</Text>
        </LinearGradient>
        </TouchableOpacity>
    
  );
}
