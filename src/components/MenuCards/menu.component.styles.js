import { StyleSheet } from 'react-native';

import {palete} from '../../theme/theme';

export default StyleSheet.create({
    container: {
        width:'90%',
        height:80,
        backgroundColor:'#02c696',
        marginVertical:6,
      
        borderBottomRightRadius:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    
    },
    titleCont: {
        marginLeft:15
    },
    iconCont: {
        marginRight:15
    },
    title: {
        color:'white',
        fontFamily:'Montserrat_400Regular',
        textAlign:'center',
        fontSize:15
    },
    email: {
        color:'white',
        fontFamily:'Montserrat_400Regular',
        textAlign:'center',
        fontSize:11
    },
    phone: {
        color:'white',
        fontFamily:'Montserrat_400Regular',
        textAlign:'center',
        fontSize:11
    },

   

})