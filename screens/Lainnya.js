import React,{useState} from 'react';
import {View,Text, SafeAreaView, TouchableOpacity,Image,Modal} from 'react-native';
import styles from '../style/global';


export default function Lainnya({ route, navigation}){
    const [modal,setModal]= useState(false);
    const [modal2,setModal2] = useState(false);
    const user = '../assets/profile-icon-png-905.png';
    const cp = '../assets/telephone-icon-3615.png';
    const history='../assets/history-icon-png-4669.png';
 
    return(
        <View style={styles.container}>
            
                <Text style={[{fontWeight:'bold',fontSize:30, textAlign:'center', }]}>
                    Menu
                </Text>
                <View style={styles.input}>
                    <View style={[{width:180, margin:10}]}>
                        <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate('Beranda')}>
                            <Image
                                source={require('../assets/search-icon-png-9964.png')}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={styles.menutitle}>
                                Cek Pemesanan
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={styles.menu} onPress={()=> setModal(!modal)}>
                            <Image
                                source={require(user )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={styles.menutitle}>
                                Detail Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

<View>
                <View style={styles.input}>
                    <View style={[{width:180, margin:10}]}>
                        <TouchableOpacity style={styles.menu} onPress={()=> setModal2(!modal2)}>
                            <Image
                                source={require(cp)}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={styles.menutitle}>
                                Hubungi Kami
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={styles.menu}  onPress={()=>navigation.navigate('Daftar_Pesanan')}>
                            <Image
                                source={require(history )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={styles.menutitle}>
                                Riwayat Pesanan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                setModal(!modal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                Fitur Dalam Pengembangan
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal(!modal)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    Kembali
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                onRequestClose={() => {
                setModal2(!modal2);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', fontSize:18, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                Nurul Aulia Larasati - 119140008
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal2(!modal2)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    OK
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}