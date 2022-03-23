import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2F2F2',  
        flex :1, 
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },

    cont2:{
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:4,
        marginHorizontal:12,
        paddingVertical:10,
        paddingHorizontal:25,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        },
    title:{
        textAlign:'center',
        color: '#00579C',
        fontSize: 30,
        fontWeight:'bold',
        marginBottom:30,
        lineHeight:35
    },

    sub_title:{
        color:'#9D9D9D',
        fontSize:16,
        fontWeight:'400',
        lineHeight:19,
    },
    input:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        alignContent:'center'
    },
    txtinput:{
        borderWidth:0.5,
        borderRadius:5,
        padding:10,
        height:40,
        width:'90%',
        margin:10,
        borderColor:'#00579C',
    },
    juml:{
        width:347,
        borderWidth:0.5,
        borderRadius:5,
        padding:10,
        height:40,
        marginVertical:15,
    },

    button:{
        flexDirection:'row',
        alignItems: 'center',
        borderWidth:0.5,
        borderRadius:5,
        justifyContent:'center',
        padding:15,
        backgroundColor:'#EE9E54',
        marginBottom:30,
        marginTop:10
    },
    txtbutt:{
        color:'#FFFFFF',
        fontSize:20,
        paddingHorizontal:10
        // alignSelf:'center'
    },
    cont3:{
        margin:35,
        backgroundColor:'#E9E9E9',
        borderRadius:4,
        padding:27,
        borderWidth:0.5,
    },

    subt_ps:{
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:30,
        color:'black',

    },
    Line: {
        borderBottomColor: "#9D9D9D", 
        borderBottomWidth: 1, 
        alignSelf:'stretch',
        width: "100%",
    }
  
});
export default styles;