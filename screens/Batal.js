import React,{useState} from 'react';
import {View,Text,TouchableOpacity,TextInput, SafeAreaView, Image,ScrollView} from 'react-native';
import styles from '../style/global';
import { Fontisto} from '@expo/vector-icons';

export default function Batal({route,navigation}){
    try {
        const [PA,setPA] = useState(route.params.PA)
        const [PT,setPT] = useState(route.params.PT)
        const [layanan,setLayanan] = useState(route.params.layanan)
        const [tgl,setTgl] = useState(route.params.tgl);
        const [jam,setJam] = useState(route.params.jam);
        const [jumlah,setJumlah]=useState(route.params.jumlah);
        const [hargaFix, setHarga]=useState(route.params.hargaFix);

        return(
            <SafeAreaView >
                <ScrollView>
                    
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

                </ScrollView>
                
            </SafeAreaView>
        );

    } catch {
        return(
        <SafeAreaView style={styles.container}>
            <View style={[{alignItem:'center', justifyContent:'center', alignItems:'center'}]}>
                
                <Image
                    source={require('../assets/ticket.png' )}
                    style={{width:150, height:150}}
                    />
                <Text style ={styles.txt_btl}>
                    Tidak ada Aktivitas Pembatalan Tiket
                </Text>
            </View>
        </SafeAreaView>
        
        );
    }
    
}