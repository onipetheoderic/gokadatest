import { StyleSheet } from 'react-native';
import {palete} from '../../theme/theme'

export default StyleSheet.create({
    filterField: {
        backgroundColor:'white', 
        width:'88%', 
        alignSelf:'center', 
        height:50,
        borderRadius:7,
        justifyContent:'center',
        shadowColor: "#00000014",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 10,
    },
    textInput2: {
        
        fontFamily:'Montserrat_400Regular',
        height: 40, 
        marginLeft:14,

        
         
    },
    containerFilter: {
        marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row',
        width:'88%', 
        alignSelf:'center'
    },
    clearTextStyle: {
        fontFamily:'Montserrat_400Regular',
        fontSize:16,
        color: palete.DirtyBrown,
    },
    title:{
        fontFamily:'Poppins_800ExtraBold',
        // color: palete.BritishRacingGreen
    },
    formPortionFilter:{
        zIndex:10,
        marginLeft:'auto', 
        width:'88%', 
        height:53
    },
   formPortion:{
        zIndex:10,
        marginLeft:'auto', 
        width:'88%', 
        height:50,
        backgroundColor:'green'
   },
    container: {
        width:'90%', 
        height:50, 
        backgroundColor:'green', 
        flexDirection:'row', 
        alignItems:'center',    
        backgroundColor:'#0000001C',
        borderRadius:10,
    },
    image: {
        width:14,
        height:10
    },
    typeCont: {
       marginLeft:10,
       marginTop:23
    },
    label: {
        fontFamily:'Montserrat_400Regular',
        fontSize:10,
        color: palete.BritishRacingGreen,
        marginTop:10,
        marginLeft:4,
    },
    textInput: {
        
        width:'90%',
        fontFamily:'Montserrat_400Regular',
        height: 50, 
        marginLeft:8,
    },
    iconStyle: {
        marginLeft:10
    }
})