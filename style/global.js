import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2F2F2',  
        flex :1, 
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: StatusBar.currentHeight,
        marginVertical:70,
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
        lineHeight:35,
        marginTop:15,
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
        flexDirection:'row',
        justifyContent:'space-between',
        width:347,
        borderWidth:0.5,
        borderRadius:5,
        padding:10,
        height:40,
        marginVertical:15,
        borderColor:'#00579C'
    },
    jumlfix:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15,
    },
    button:{
        flexDirection:'row',
        alignItems: 'center',
        borderRadius:5,
        justifyContent:'center',
        padding:15,
        backgroundColor:'#EE9E54',
        marginBottom:30,
        marginTop:10,
    },
    txtbutt:{
        color:'#FFFFFF',
        fontSize:20,
        paddingHorizontal:10
    },
    cont3:{
        marginVertical:20,
        marginHorizontal:35,
        backgroundColor:'#E9E9E9',
        borderRadius:4,
        paddingHorizontal:27,
        borderWidth:0.5,
    },
    cont4:{
        marginVertical:20,
        // marginHorizontal:10,
        backgroundColor:'#E9E9E9',
        borderRadius:4,
        paddingHorizontal:27,
        borderWidth:0.5,
    },
    subt_ps:{
        fontSize:18,
        fontWeight:'bold',
        margin:27,
        marginHorizontal:30,
        color:'black',

    },
    Line: {
        borderBottomColor: "#9D9D9D", 
        borderBottomWidth: 1, 
        alignSelf:'stretch',
        width: "100%",
    },

    txt_btl:{
        color:'#00579C', 
        fontWeight:'bold',
        fontSize:20,
        marginVertical:25,
    },
    subt_dp:{
        fontSize:16,
        fontWeight:'bold',
        // marginBottom:5,
        color:'black',

    },
    subt2_dp:{
        fontSize:12,
        marginVertical:5,
        color:'black',

    },
    tampil_dtl:{
        borderBottomColor:'#00579C',
        borderWidth:0.5,
        borderRadius:5,
        alignSelf:'stretch',
        height:37,
        borderColor:'#00579C',
        justifyContent:'center',
        padding:5
    }
    ,content_pes:{
        marginBottom:27,
    },
    txt_but_around:{
        marginHorizontal:50,
    },
    total:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button2:{
        borderColor:'#00579C',
        borderWidth:2,
        borderRadius:5,
        padding:15,
        backgroundColor:'white',
        marginBottom:30,
        marginTop:10,
    },
    button3:{
        borderRadius:5,
        padding:15,
        backgroundColor:'#00579C',
        marginBottom:30,
        marginTop:10,
    },
    txtbutt2:{
        color:'#00579C',
        fontSize:20,
        paddingHorizontal:10
    },
    txtbutt3:{
        color:'#FFFFFF',
        fontSize:20,
        paddingHorizontal:10
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
      },

    modalView: {
        shadowColor: "#000",
        shadowOffset: {
        width: 10,
        height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 20,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },

    modalHeader:{
        backgroundColor:'#EE9E54',
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    
    button1: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:100,
        alignSelf:'center',
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
  
    menu:{
        padding:30, 
        borderColor:'#00579C', 
        borderWidth: 0.5,
        borderRadius:5
    },
    menutitle:{
        textAlign:'center', 
        fontWeight:'bold',
        color:'#00579C'
    }
});
export default styles;