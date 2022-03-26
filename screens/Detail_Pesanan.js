import React,{useState} from 'react';
import {View,Text,TouchableOpacity,TextInput, SafeAreaView, Modal,ScrollView} from 'react-native';
import styles from '../style/global';
import { Fontisto} from '@expo/vector-icons';

export default function Detail_pesanan({route,navigation}){
    const [modal,setModal] = useState(false);
    const [PA,setPA] = useState(route.params.PA)
    const [PT,setPT] = useState(route.params.PT)
    const [layanan,setLayanan] = useState(route.params.layanan)
    const [tgl,setTgl] = useState(route.params.tgl);
    const [jam,setJam] = useState(route.params.jam);
    const [jumlah,setJumlah]=useState(route.params.jumlah);
    const [hargaFix, setHarga]=useState(route.params.hargaFix);
    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.cont2}>
                <Text style={styles.title}>Kapalzy</Text>
                <Text style={styles.subt_dp}>Informasi Pemesanan</Text>
                
                <View style={styles.cont4}>
                    <View style={[styles.input]}>
                        <Text style={styles.subt_ps}>{JSON.stringify(PA).replace(/"/g, '')} </Text>
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
                

                <Text style={styles.subt_dp}>Data Pemesan</Text>
                
                <Text style={styles.subt2_dp}>Nama Lengkap</Text>
                <View style={styles.tampil_dtl}>
                    <TextInput ></TextInput>
                </View>
                
                <Text style={styles.subt2_dp}>Identitas</Text>
                <View style={styles.tampil_dtl}>
                    <TextInput ></TextInput>
                </View>

                <Text style={styles.subt2_dp}>Umur</Text>
                <View style={styles.tampil_dtl}>
                    <TextInput ></TextInput>
                </View>
                
                <View >

                <View style={styles.txt_but_around}>
                    <TouchableOpacity   style={styles.button}
                                        onPress={()=>setModal(!modal)}>
                        <Text style={styles.txtbutt}>
                            Submit
                        </Text>
                    </TouchableOpacity>    
                </View>

                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                        setModal(!modal);
                        }} >
                    
                    <View 
                    style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    Pembayaran
                                </Text>
                            </View>
                            <View style={[{justifyContent:'center', alignItems:'center'}]}>
                                <Text style={[{ padding:20,fontSize:13 }]}>
                                    Transfer Ke nomor rekening
                                </Text>
                                <Text style={[{ paddingBottom:20,fontSize:16 }]}>
                                    08828194xxxx
                                </Text>
                                <TouchableOpacity style={styles.button} 
                                onPress={() => navigation.navigate('Daftar_Pesanan',{PA:PA,PT:PT,layanan:layanan,tgl:tgl,jam:jam,
                                                                                                jumlah:jumlah,hargaFix:hargaFix,})}>
                                    <Text style={styles.txtbutt}>
                                        Selesai
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                </View>
                
            </View>   
        </SafeAreaView>
        
    );
}