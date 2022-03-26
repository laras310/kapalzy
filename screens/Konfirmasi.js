import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function Konfirmasi({route,navigation}){

    //get parameter
    const [PA,setPA] = useState(route.params.pelA)
    const [PT,setPT] = useState(route.params.pelT)
    const [layanan,setLayanan] = useState(route.params.layanan)
    const [tgl,setTgl] = useState(route.params.tanggal);
    const [jam,setJam] = useState(route.params.waktu);
    const [jumlah,setJumlah]=useState(route.params.jumDewasa);
    const [hargaFix, setHarga]=useState(route.params.harga);
    const [total, setTotal]=useState(route.params.total);
    const [kuota, setKuota]=useState(route.params.kuota);
    console.log(hargaFix)
    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.cont2}>
                <Text style={styles.title}>Kapalzy</Text>
                <Text style={[styles.subt_dp,{marginBottom:20}]}>Kuota Tersedia : 
                {JSON.stringify(kuota).replace(/"/g, '')}
                </Text>
                <Text style={styles.subt_dp}>Rincian Tiket</Text>
                
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
                        {/* <Text>{JSON.stringify(layanan).replace(/"/g, '')}</Text> */}
                        
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
                
                <View style={styles.total}>
                    <Text style={[styles.subt_dp,{fontSize:19}]}>Total</Text>
                    <Text style={[styles.subt_dp,{fontSize:19}]}>Rp. 
                    {JSON.stringify(total).replace(/"/g, '')}
                    </Text>
                </View>
                
                <View style={[styles.total,{marginTop:30,}]}>
                    <TouchableOpacity   style={styles.button2}
                                        onPress={()=>navigation.navigate("Beranda")}>
                        <Text style={styles.txtbutt2}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity   style={styles.button3}
                                        onPress={()=>navigation.navigate("Detail_pesanan", {PA:PA,PT:PT,layanan:layanan,tgl:tgl,jam:jam,
                                                                                                jumlah:jumlah,hargaFix:hargaFix,})}>
                        <Text style={styles.txtbutt3}>
                            Lanjutkan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>   
             
        </SafeAreaView>
        
    );
}