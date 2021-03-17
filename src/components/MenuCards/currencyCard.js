import React from 'react'
import PropTypes from 'prop-types'
import {  Animated,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback, 
    Button, Easing } from "react-native";



export default function CurrencyCard({title, fullName, homeCurrency}) {
    const [pressed, handlePress] = React.useState(false)
    const [value, onChangeText] = React.useState(0);
    const [show, changeShow] = React.useState(false)
    const background = !pressed ? "#EFF2F2" : "#4357fb"
    const color = !pressed ? "gray" : "white"
  return (
    <>
    {show &&
    <View style={{position:'absolute', zIndex:100, borderWidth:5, borderColor:'#4357fb', borderRadius:20, width:'100%', height:130, backgroundColor:'white'}}>
      <Text style={{fontSize:14, color:'#4357fb', fontFamily:'Montserrat_600SemiBold', textAlign:'center'}}>Set conversion rate for {title}</Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:10}}>
     <Text style={{fontSize:12, fontFamily:'Montserrat_600SemiBold'}}>
       1 {homeCurrency}:</Text>
     <TextInput
      placeholder="378"
      keyboardType="decimal-pad"
      style={{ height: 40, fontFamily:'Montserrat_600SemiBold', width:'50%', marginRight:5, borderRadius:20, paddingLeft:10, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      </View>
    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
    <TouchableOpacity onPress={()=>{changeShow(!show); handlePress(true)}} 
    style={{width:100, borderRadius:10, alignItems:'center',  justifyContent:'center', height:30, backgroundColor:'#4357fb'}}>
      <Text style={{fontSize:12, color:'white', fontFamily:'Montserrat_600SemiBold'}}>Save</Text>    
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{changeShow(false); handlePress(false)}} 
    style={{width:60, borderRadius:10, alignItems:'center', justifyContent:'center', height:30, backgroundColor:'gray'}}>
      <Text style={{fontSize:12, fontFamily:'Montserrat_600SemiBold'}}>Cancel</Text>    
    </TouchableOpacity>

    <TouchableOpacity style={{ borderRadius:10, borderColor:'gray', borderWidth:1, width:70,alignItems:'center', 
    justifyContent:'center', height:30, backgroundColor:'white'}} onPress={()=>{changeShow(false); handlePress(false)}}>
      <Text style={{fontSize:12, fontFamily:'Montserrat_600SemiBold'}}>No Deal</Text>    
    </TouchableOpacity>
    </View>
    </View>

}
    <TouchableHighlight underlayColor="white" onLongPress={()=>changeShow(true)} style={{width:'46%'}}>
        <View style={{ width:'100%',marginBottom:10, justifyContent:'center',alignItems:'center', height:50, backgroundColor:background}}>
            <Text style={{fontSize:15, color:color, fontFamily:'Montserrat_400Regular',}}>{title}</Text>
            <Text style={{fontSize:8, color:color, fontFamily:'Montserrat_400Regular', textAlign:'center'}}>{fullName}</Text>
        </View>
    </TouchableHighlight>
    </>
  );
}

CurrencyCard.propTypes = {

}
