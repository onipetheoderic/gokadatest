import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import {palete} from '../../theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function GradientButton({ onPress, title, icon }) {
  return (
      <TouchableOpacity onPress={onPress} style={{marginVertical:7}}>
        <LinearGradient
        // Button Linear Gradient
        colors={['#13c1fd', '#6c5df7']}
        style={{width:'96%', justifyContent:'center', flexDirection:'row',
        alignItems:'center', height:60, borderTopRightRadius:30,
        borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <FontAwesome5 name={icon} style={{color:"white", marginRight:5}} size={35} />
            <Text style={{  fontSize:20,
            color: palete.TextColor,
            fontFamily:'Montserrat_400Regular',}}>{title}</Text>
        
        </LinearGradient>
      </TouchableOpacity>
    
  );
}

GradientButton.propTypes = {

}
