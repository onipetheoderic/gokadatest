import { StyleSheet } from 'react-native';
export default StyleSheet.create({
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
        color: 'black',
    },
    tips: {
      textAlign:'center',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:13,
        color: 'black',
    },
    signUpText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:13,
        color: 'black',
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
      width:162,
    height:162,
       
        resizeMode: 'stretch',
    },
   
  });