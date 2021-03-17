import React from 'react';

import { 
    Image, 
    ScrollView, 
    TouchableOpacity, 
    Text, 
    View, 
    Dimensions,
    StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from'../../components/Buttons/AuthButton'
import FormField from '../../components/FormFields/FormField';
import logo from '../../../assets/images/blueLogo.png';
import styles from '../../styles/auth.styles';

export default function ForgotPassword(props) {
  return (
    <View style={styles.container}>
            <View style={styles.logoParent}>
                <Image source={logo} style={styles.logoImage} />   
                <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={[styles.signUpText,{textAlign:'center'}]}>Quickly retrive your password below</Text>   
                </View>
                
            </View>
            <LinearGradient  colors={['#02c696', '#00c795']} start={{ x: 0, y: 0 }} 
            end={{ x: 0, y: 1 }} style={styles.formParent}>
                <FormField marginVertical={10} placeholder="Phone" secure={false} icon="phone"/>

                <AuthButton title="Get Code" marginVertical={30} />
                <View style={styles.signupCont}>
                <Text style={styles.signUpText}>Dont have an Account? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
                <Text style={styles.signUpText2}>Sign Up here </Text>
                </TouchableOpacity>
               
                </View>
                <View style={styles.signupCont2}>
                
                </View>
               
            </LinearGradient>
        </View>
  );
}

