import  React, {useState} from 'react';
import { Text, View, SafeAreaView, ScrollView, Modal, TouchableOpacity,Pressable } from 'react-native';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';


export default function Daftar_Pesanan({route,navigation}){

    try {
        const [PA,setPA] = useState(route.params.PA)
        const [PT,setPT] = useState(route.params.PT)
        const [layanan,setLayanan] = useState(route.params.layanan)
        const [tgl,setTgl] = useState(route.params.tgl);
        const [jam,setJam] = useState(route.params.jam);
        const [jumlah,setJumlah]=useState(route.params.jumlah);
        const [hargaFix, setHarga]=useState(route.params.hargaFix);
        const [modal,setModal]=useState(false)
        return(
            <SafeAreaView >
                <ScrollView>
                    <Pressable onLongPress={()=>setModal(true)}>
                        <View style={styles.cont3} >
                            <View style={[styles.input]}>
                                <Text style={styles.subt_ps}>{JSON.stringify(PA).replace(/"/g, '')}</Text>
                                <Fontisto name="arrow-right-l" size={24} color="black" />
                                <Text style={styles.subt_ps}>{JSON.stringify(PT).replace(/"/g, '')} </Text>
                            </View>

                            <View style={[styles.content_pes]}>
                                <View style={[{marginVertical:5}]}>
                                    <Text style={[{fontWeight:'bold'}]}>Jadwal Masuk Pelabuhan</Text>
                                    <Text>{JSON.stringify(tgl).replace(/"/g, '')}</Text>
                                    <Text>{JSON.stringify(jam).replace(/"/g, '')}</Text>    
                                </View>
                                <Text style={[{fontWeight:'bold',marginVertical:5}]}>Layanan</Text>
                                <Text>{JSON.stringify(layanan).replace(/"/g, '')}</Text>
                                <View style={styles.Line}></View>
                                <View style={styles.jumlfix}>
                                    <View style={[{flexDirection:'row'}]}>
                                        <Text >Dewasa</Text>
                                        <Text> x{JSON.stringify(jumlah).replace(/"/g, '')}</Text>
                                    </View>     
                                    <Text >Rp. 
                                    {JSON.stringify(hargaFix).replace(/"/g, '')}
                                    </Text> 
                                </View>
                            </View>
                        
                        </View>
                    </Pressable> 

                    
                </ScrollView>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModal(!modal);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    Batalkan Pemesanan?
                                </Text>
                            </View>
                            <View style={[{marginTop:30,flexDirection:'row',justifyContent:'space-around',}]}>
                                <TouchableOpacity style={styles.button2} onPress={() => {setModal(!modal)}}>
                                    <Text style={styles.txtbutt2}>
                                        Tidak
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button3} onPress={()=>navigation.navigate('Batal',{PA:PA,PT:PT,layanan:layanan,tgl:tgl,jam:jam,
                                                                                                                    jumlah:jumlah,hargaFix:hargaFix,})}>
                                    <Text style={styles.txtbutt3}>
                                        Ya
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    } 
    catch  {
        return(
            <SafeAreaView >
                <ScrollView>
                    <View style={styles.cont3}>
                        <Text style={styles.subt_ps}>Tidak Ada History Pemesanan</Text>
                        
                    </View>

                </ScrollView>
                

            </SafeAreaView>
        );
    }
    
}