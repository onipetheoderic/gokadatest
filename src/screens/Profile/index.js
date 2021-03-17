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
import Feather from 'react-native-vector-icons/Feather';



export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
            <View style={styles.logoParent}>
                <Image source={logo} style={styles.logoImage} />   
                <View style={{width:'90%', alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
                <Text style={[styles.signUpText,{textAlign:'center'}]}>
                We notice that you are just registering, so let's set you up as a GAPP Merchant
                </Text>   
                </View>
                
            </View>
            <LinearGradient  colors={['#02c696', 'yellow']} start={{ x: 0, y: 0 }} 
            end={{ x: 0, y: 1 }} style={styles.formParent}>
                <View style={styles.cameraCont}>
                    <Feather name="camera" style={{color:'#23f0c7', alignSelf:'center'}} size={70} />
                </View>
               <View style={styles.space10} />
                <TouchableOpacity style={{backgroundColor:'#02c696', borderRadius:10, width:'80%', justifyContent:'center', alignSelf:'center', height:50, alignItems:'center'}}>
                    <Text style={[styles.signUpText,{textAlign:'center', padding:10}]}>
                    Click here to set the location of your shop to this current location
                    </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop:10, backgroundColor:'#02c696', borderRadius:10, width:'80%', justifyContent:'center', alignSelf:'center', height:50, alignItems:'center'}}>
                    <Text style={[styles.signUpText,{textAlign:'center', padding:10}]}>
                    Click here to use a different Location
                    </Text> 
                </TouchableOpacity>
              
                <AuthButton title="Finish" onPress={()=>navigation.navigate("Dashboard")} marginVertical={30} />
               
            </LinearGradient>
        </View>
  );
}


const styles = StyleSheet.create({
    cameraCont: {
        width:150, 
        height:150, 
        borderWidth:10, 
        alignItems:'center', 
        justifyContent:'center', 
        borderColor:'#23f0c7', 
        borderRadius:120
    },
    signupCont: {
        flexDirection:'row',
        justifyContent:'center'
    },
    space10: {
        marginTop:20,
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
        flex: 2,
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