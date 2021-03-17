import React, {useState, useContext, useEffect} from 'react';
import { CounterContext } from "../../../store";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

export default function OutlineButton({id, price, title}) {
    const [show, changeShow] = useState(false)
    const bg = !show ? "white" : "#FA6003";

    const globalState = useContext(CounterContext);      
    const {state, dispatch } = globalState;  

    useEffect(()=>{
        let currentLitres = state.litres;
        const isObjectPresent = currentLitres.some((o) => o.id === id);
        if(isObjectPresent){
            changeShow(true)
        }
        else {
            changeShow(false)
        }
    }, [])

    const handleShow = () => {
      
        //lets check if it already exists in the current Litres
        let currentLitres = state.litres;
        const isObjectPresent = currentLitres.some((o) => o.id === id);
        if(isObjectPresent === true){
            //if it already exists, we splice it from the array
            let filteredArray = currentLitres.filter(function(el){
                return el.id !== id;
            });
            dispatch({ type: 'AddToLitres', payload:filteredArray})
            changeShow(false)
        }        
        else {
            //we add it to the array
            let updated = currentLitres.concat({id, price, title})
            dispatch({ type: 'AddToLitres', payload:updated})
            changeShow(true)
        }
     
       
    }

    return (
        <TouchableOpacity onLongPress={()=>handleShow()} 
        style={{backgroundColor:bg, alignItems:'center', 
        justifyContent:'center', width:'30%', height:40, 
        marginHorizontal:3,marginVertical:3, borderRadius:4,borderWidth:2, borderColor:'#23f0c7'}}>
            <Text style={{fontFamily:'Montserrat_700Bold', fontSize:15}}>{title}</Text>
            <Text style={{fontFamily:'Montserrat_700Bold_Italic', fontSize:10}}>₦{price}</Text>
        </TouchableOpacity>
    )
}
