import React, {useEffect, useContext, useRef, useState} from 'react';
import MapView from "react-native-map-clustering";
import { CounterContext } from "../../../store";
import { Marker } from "react-native-maps";
// import styles from '../../styles/global.styles';
import { StyleSheet, ActivityIndicator, Image, StatusBar, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Spinner from 'react-native-loading-spinner-overlay';
import CircularButtonWithIcon from '../../components/Buttons/CircularButtonWithIcon';
import FormField from '../../components/FormFields/FormField';

import styles from '../../styles/global.styles';
import {useSelector, useDispatch} from 'react-redux';
import MenuCard from '../../components/MenuCards/menuCard';

import {GETPOSTS, LOADING} from '../../api/actionTypes';
import {BASEURL} from '../../api/constant';


export default function Dashboard({navigation}) {
  
  const dispatch = useDispatch()
  const users = useSelector(state=>state.users)
  const loading = useSelector(state=>state.loading)

  useEffect(() => {
    fetch(`${BASEURL}/users`)
    .then(response => response.json())
    .then(json => dispatch({type:GETPOSTS, payload:json}))  
    dispatch({type:LOADING, payload:false})   
  }, []);
  

     const userListing = users === undefined ? [] : users
  
      return (
        <View style={styles.container}>
         
        
         
           <StatusBar
        translucent={true} backgroundColor="transparent"/>
            <View style={{flex:1, backgroundColor:'#02c696'}}>
                <CircularButtonWithIcon onPress={()=>navigation.openDrawer()} 
                iconName="menu" toIcon="menu" height={60} width={60} 
                left={20} top={30}/>
                <View style={{position:'absolute', top: 90, left: 20, width:'50%'}}>
                <Text style={{fontSize:20,fontFamily:'Montserrat_700Bold'}}>
                  Welcome, 
                </Text>
                <Text style={{fontSize:15,fontFamily:'Montserrat_700Bold'}}>
                 Theoderic Onipe
                </Text>
                </View>
                 <View style={styles.cameraCont}>
                 <Image source={{uri: "https://images.thestar.com/j7gUcGlSk9Vr-_yvp1GfCduUFZA=/1086x842/smart/filters:cb(1591360136680)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/06/02/for-black-people-calling-the-police-can-be-dangerous-its-time-we-had-another-option/angelyn_francis_2.jpg"}}
                            style={{width:110, height:110, borderRadius:80}} 
                           
                            />
                </View>
            </View> 

            <View style={{flex:3, backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
               
              
                 <View style={{alignItems:'center', 
                flexDirection:'column', marginTop:20, }}>

                  {userListing.map((user)=>{
                          
                    return(
                      <View  key={user.id} style={{width:'95%', alignItems:'center'}}>
<MenuCard navigation={navigation} email={user.email} phone={user.phone} title={user.name} icon="user" />
                      </View>
                      
                    )
                  })}
                 
                       
                    

                </View>
              
               
               
            </ScrollView>
            </View>              
           
        </View>
    );
  }
