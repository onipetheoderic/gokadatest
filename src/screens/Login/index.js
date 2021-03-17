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

export default function Login(props) {
  return (
    <View style={styles.container}>
            <View style={styles.logoParent}>
                <Image source={logo} style={styles.logoImage} />   
                <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={[styles.signUpText,{textAlign:'center'}]}>Quickly Sign In Here, By providing your phone number and password </Text>   
                </View>
                
            </View>
            <LinearGradient  colors={['#02c696', 'yellow']} start={{ x: 0, y: 0 }} 
            end={{ x: 0, y: 1 }} style={styles.formParent}>
                <FormField marginVertical={10} placeholder="Phone" secure={false} icon="phone"/>

                <FormField marginVertical={10} placeholder="Password" secure={true} icon="lock"/>
                <AuthButton title="SIGN IN" marginVertical={30} />
                <View style={styles.signupCont}>
                <Text style={styles.signUpText}>Dont have an Account? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
                <Text style={styles.signUpText2}>Sign Up here </Text>
                </TouchableOpacity>
               
                </View>
                <View style={styles.signupCont2}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                <Text style={styles.signUpText2}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
               
            </LinearGradient>
        </View>
  );
}


const styles = StyleSheet.create({
    signupCont: {
        flexDirection:'row',
        justifyContent:'center'
    },
    signupCont2: {
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center'
    },
    signUpText2: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:13,
        color: '#23f0c7',
    },
    signUpText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:13,
        color: '#23f0c7',
    },
    logoText: {
        fontSize:40,
        fontFamily:'Pacifico_400Regular',
        color:'#cf1641',
        alignSelf:'center'
    },  
    logoParent: {
        flex: 1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    formParent: {
        flex: 2.8,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'yellow',
        borderTopRightRadius:60,
        
    },
    container: {
      flex: 1,
    backgroundColor:'white'
    },
    logoImage: {
      alignSelf:'center',
      width:212,
    height:85,
       
        resizeMode: 'stretch',
    },
   
  });