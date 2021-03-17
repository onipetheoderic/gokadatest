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
         

          <Text style={styles.descriptionText}>Aim: To fullfil my Ambition of working with a prospective company like GOKADA</Text>
          <View style={styles.spacer10}/>
          </View>
         
      </View>
      <View style={styles.spacer30} />
       <View style={styles.positioner}>
         

         

          <TouchableOpacity onPress={()=>navigation.navigate("Register")} 
          style={styles.outlineBtn}>           
            <Text style={styles.textButton}>
             View My Test
            </Text>
            <Entypo name='chevron-right' style={styles.iconStyle} size={28} />
          </TouchableOpacity>
          
       </View>
    </View>
  );
}
