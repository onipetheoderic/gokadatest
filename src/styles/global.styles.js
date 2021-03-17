import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {palete} from '../theme/theme';

export default StyleSheet.create({
    qrCode: {
        alignItems:'center',
        marginTop:20,
    },
    centerBox: {
        marginTop:50,
    },
    overallCont: {
        backgroundColor:'#02c696',
        flex:1,   
    },
    circleCont:{
        width:70,
        height:70, 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:70, 
        borderWidth:1,
        borderColor:'blue'
    },
    circleText: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:20,
        color:'blue',
        marginLeft:10,
    },
    detailsText: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:40,
        
        color:'#4357fb',
    },
    
    logoTextNext225: {
        color:'blue',
        textAlign:'center',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:23
    },
    logoPortion: {
        flex:2,

       justifyContent: 'center',
        
    },
    logoPortion1: {
        flex:1.2,

       justifyContent: 'center',
        
    },
    logoPortionChild: {        
        alignItems:'center',
        flexDirection:'row'        
    },
    logoPortion2: {        
        flex:1.6,

        justifyContent: 'center',    
    },
    
    logoTextNext18: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:15,
        color:'#4357fb',
        textAlign:'center'
    },
    headerText343: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:17,
        color:'#9b22fe',
    },
    logoImageInParent: {
        width:265,
        height:105,
        resizeMode: 'cover',
        alignSelf:'center'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logoImage: {
        alignSelf:'center',
        width:212,
        height:215,       
        resizeMode: 'stretch',
    },
    logoView: {
        
    },
    destinationText: {
        fontSize:10,
        fontFamily:'Montserrat_600SemiBold_Italic'
    },
    proceed: {
        position:'absolute', 
        bottom:160, 
        right:0,
        backgroundColor:'blue',
        flexDirection:'row',
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },    
    proceedIcon: {
        color:'white', 
        alignSelf:'center',
        padding:10,
    },
    proceedText: {
        fontSize:13,
        padding:10,
        color:'white',
        fontFamily:'Montserrat_600SemiBold_Italic'
    },
    // formParent: {
    //     backgroundColor:'#02c696', 
    //     flex:1
    // },
    formParent: {
        backgroundColor:'#02c696', 
        top:0, 
        width:'100%', 
        height:100, 
        position:'absolute'
    },
    contentMedium: {
        fontSize:15,
        fontFamily:'Montserrat_700Bold',
        marginBottom:6,
    },
    dispatchBtn: {
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:35,
        borderRadius:15
    },
    dispatchText: {
        fontSize:15,
        fontFamily:'Montserrat_700Bold',
        color:'white'
        
    },
    contentBig:{
        fontSize:20,
        fontFamily:'Montserrat_700Bold',
        marginBottom:6,
        color:'white'
    },
    contentSmall: {
        fontSize:11,
        fontFamily:'Montserrat_500Medium',
        marginBottom:2,
       
    },
    miniHeader: {
        fontSize:12,
        fontFamily:'Montserrat_700Bold',
        marginBottom:10,
        textAlign:'center'
    },
    bottomParent: {
        backgroundColor:'#02c696', 
        bottom:0, 
        width:'100%', 
        flexDirection:'row',
        height:140, 
        position:'absolute',
        alignItems:'center',
            
    },
    bottomParentCont: {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        flexWrap:'wrap'
    },
    splashContainer: {
        flex:1,
        backgroundColor: '#00c795',
        justifyContent:'center',
    },
    positioner: {
        width:'90%',
        alignSelf:'center'
    },
    headerTextNormal: {
        fontSize:60,
        fontFamily:'FasterOne_400Regular'
    },
    headerText: {
        fontSize:60,
        fontFamily:'FasterOne_400Regular'
    },
    descriptionText: {
        fontSize:12,
        fontFamily:'Montserrat_600SemiBold_Italic'
    },
    descriptionText1: {
        fontSize:10,
        fontFamily:'Montserrat_400Regular'
    },
    descriptionText2: {
        fontSize:18,
        fontFamily:'Montserrat_600SemiBold_Italic',
        alignSelf:'center'
    },
    spinnerContainer: {
        backgroundColor:'transparent', 
        position:'absolute', 
        width:50, 
        height:50
    },
    spacer20: {
        marginVertical:20
    },
    spacer10: {
        marginVertical:10
    },
    spacer30: {
        marginVertical:30
    },
    outlineBtn: {
        borderWidth:1,
        width:'55%',
        height:60,
        flexDirection:'row',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',        
    },
    iconStyle: {
        marginLeft:5
    },    
    textButton: {
        fontFamily:'Montserrat_700Bold',
    },
    menuBottomContainer: {
        width:'100%',
        height:130,
        flexDirection:'row',      
        position:'absolute',
        bottom:1,
        zIndex:1
      },
    container: {
        flex: 1,
        backgroundColor: '#02c696',
       
      
    },
    cameraCont: {
        width:130, 
        height:130, 
        marginTop:26,
        marginRight:10,
        borderWidth:10,
        alignSelf:'flex-end', 
        alignItems:'center', 
        justifyContent:'center', 
        borderColor:'#23f0c7', 
        borderRadius:120
    },
    cameraContM: {
        width:70, 
        height:70, 
        marginTop:20,
        marginRight:10,
        borderWidth:10,
        alignSelf:'flex-end', 
        alignItems:'center', 
        justifyContent:'center', 
        borderColor:'#23f0c7', 
        borderRadius:120
    },
    mapStyle: {
        zIndex:-1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    paymentBtn: {
        marginTop:20,
        height:40, 
        width:'100%',
        borderRadius:4,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems:'center'
    },
    eachText: {
        marginTop:5,
        fontSize:17,
        fontFamily:'Montserrat_700Bold',
    },
    eachText2: {
        fontSize:16,
        fontFamily:'Montserrat_700Bold_Italic',
    },
    eachTextSmall: {
        fontSize:10,
        fontFamily:'Montserrat_700Bold_Italic',
    },
    eachTextWhite: {
        color:'white',
        fontSize:16,
        fontFamily:'Montserrat_700Bold',
    },
    parentStyle: {
        top:10, 
        zIndex:10, 
        position:'absolute', 
        width:80, 
        height:80, 
        borderRadius:40, 
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
    },
    bottomLitreCont: {
        flexDirection:'row'
    }
})