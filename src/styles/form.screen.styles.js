import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {palete} from '../theme/theme';


export default StyleSheet.create({
    headerCont: {
        marginTop:40,
        width:'90%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    purchaseText: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:20,
        color: '#23f0c7',
    },
    signupCont: {
        flexDirection:'row',
        justifyContent:'center'
    },
    signupCont2: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    signUpText2: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:13,
        color: '#23f0c7',
    },
    tips: {
      textAlign:'center',
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
    space20: {
        marginVertical:5
    },
    eachCard: {
        width:'90%',
        backgroundColor:'white', 
        height:100, 
        borderTopRightRadius:20, 
        marginVertical:10,
        flexDirection:'row'
    },
    datePart: {
        width:'23%',
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    },
    priceText: {
        fontSize:17,
        fontFamily:'Righteous_400Regular'
    },
    descPart: {
        width:'70%',
        backgroundColor:'white',
        marginLeft:10,
        alignItems:'center',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        justifyContent:'center'
    },
    dateText: {
        fontSize:14,
        color:'white',
        fontFamily:'Righteous_400Regular'
    },
    dateTextDark: {
        fontSize:13,
        color:'#23f0c7',
        fontFamily:'Righteous_400Regular'
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
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        
    },
    container: {
      flex: 1,
    backgroundColor:'white'
    },
    logoImage: {
      alignSelf:'center',
      marginTop:10,
      width:200,
    height:80,
       
        resizeMode: 'stretch',
    },
   
  });