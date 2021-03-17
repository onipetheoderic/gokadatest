import React from 'react';

import { 
    Image, 
    ScrollView, 
    TouchableOpacity, 
    Text, 
    View, 
    KeyboardAvoidingView,
    Dimensions,
    StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from'../../components/Buttons/AuthButton'
import FormField from '../../components/FormFields/FormField';
import logo from '../../../assets/images/blueLogo.png';
import styles from '../../styles/auth.styles';
export default function Register(props) {
  return (
    <View style={styles.container}>
            <View style={styles.logoParent}>
                <Image source={logo} style={styles.logoImage} />   
                <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                  
                </View>
                
            </View>
            <LinearGradient  colors={['#02c696', '#00c795']} start={{ x: 0, y: 0 }} 
            end={{ x: 0, y: 1 }} style={styles.formParent}>
            
            <Text style={styles.tips}>Enter your valid details below</Text>
                <FormField marginVertical={5} placeholder="Phone" secure={false} icon="phone"/>
            
                <FormField marginVertical={5} placeholder="email" secure={false} icon="mail"/>

                

                 <FormField marginVertical={5} placeholder="Password" secure={true} icon="lock"/>
                <AuthButton title="SIGN UP" onPress={()=>props.navigation.navigate('Dashboard')} marginVertical={10} />
                <View style={styles.signupCont}>
                <Text style={styles.signUpText}>Already have an acount? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                <Text style={styles.signUpText2}>Sign In</Text>
                </TouchableOpacity>
               
                </View>
              
             
            </LinearGradient>
        </View>
  );
}

