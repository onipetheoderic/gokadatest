import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import avatar from '../../../assets/images/avatar.png'

function RequestCard({navigation, gasNo, fullName, distance, totalPrice, paymentStatus}) {
    return (
        <View style={{width:'90%', marginVertical:10, height:180, 
        borderRadius:20, alignItems:'center',backgroundColor:'#ffe4e6', justifyContent:'space-between', flexDirection:'row'}}>
           <View style={{marginLeft:20, flex:2}}>
           <Text style={{fontSize:27,fontFamily:'Righteous_400Regular'}}>{gasNo}</Text>
               <Text style={{fontFamily:'Montserrat_700Bold'}}>{fullName} ({distance})</Text>               
               <Text style={{fontFamily:'Montserrat_700Bold'}}>4.5Ltr, 12.5ltr, 6.5ltr</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:27,fontFamily:'Righteous_400Regular'}}>₦{totalPrice} </Text>
               <Text style={{fontSize:13,fontFamily:'Righteous_400Regular', color:'#327dda'}}>
                   ({paymentStatus})</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
              
                <TouchableOpacity onPress={()=>navigation.navigate("SingleRequest")} style={{width:'90%',  justifyContent:'center',  alignItems:'center', height:40, borderBottomRightRadius:20, 
                backgroundColor:'#327dda'}}>
                    <Text style={{color:'white', fontSize:17,fontFamily:'Montserrat_700Bold'}}>Accept Deal</Text>
                </TouchableOpacity>
                </View>
                

           </View>
           <View>
           <Image source={avatar} style={{width:80, height:80}} />
           </View>
        </View>
    )
}

RequestCard.propTypes = {

}

export default RequestCard

