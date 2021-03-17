import React, {useEffect, useContext} from 'react';
import { 
    Image, 
    ScrollView, 
    ImageBackground,
    TouchableOpacity, 
    Text, 
    View, 
    Dimensions } from "react-native";    
import * as Location from 'expo-location';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../../styles/global.styles';
import { CounterContext } from "../../../store";
import logo from '../../../assets/images/blueLogo.png';

const { height, width } = Dimensions.get('screen');


export default function Splash({navigation}) {

    const globalState = useContext(CounterContext);      
    const {state, dispatch } = globalState;  

  return (
    <View style={styles.splashContainer}>
      <View>
          <View style={styles.logoView}>
              <Image source={logo} style={styles.logoImage} />     
              <Text style={styles.descriptionText2}>Theoderic React Native Test App</Text> 
    
          </View>
          <View style={styles.spacer30} />
       <View style={styles.positioner}>
         

          <Text style={styles.descriptionText}>Looking forward to working with Gokada</Text>
          <View style={styles.spacer10}/>
          
           <Text style={styles.descriptionText}>I approached it by creating the prove of concept for the following screens</Text>
           <View style={styles.spacer10}/>
           <Text style={styles.descriptionText1}>Splash Screen</Text>
           <Text style={styles.descriptionText1}>Login Screen</Text>
           <Text style={styles.descriptionText1}>Registration Screen</Text>
           <Text style={styles.descriptionText1}>Forgot Password Screen</Text>
           <Text style={styles.descriptionText1}>User Dashboard Listing Screen(API and Redux Activities here)</Text>

         
          
          </View>
         
      </View>
      <View style={styles.spacer10} />
       <View style={styles.positioner}>
         

         

          <TouchableOpacity onPress={()=>navigation.navigate("Register")} 
          style={styles.outlineBtn}>           
            <Text style={styles.textButton}>
             Proceed
            </Text>
            <Entypo name='chevron-right' style={styles.iconStyle} size={28} />
          </TouchableOpacity>
          
       </View>
    </View>
  );
}
