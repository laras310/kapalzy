import * as React from 'react';
import {View,Text,TouchableOpacity,TextInput, SafeAreaView, ScrollView} from 'react-native';
import styles from '../style/global';
import KonfBayar from './PopUp/KonfBayar';
import { Fontisto} from '@expo/vector-icons';

export default function Detail_pesanan({navigation}){
    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.cont2}>
                <Text style={styles.title}>Kapalzy</Text>
                <Text style={styles.subt_dp}>Informasi Pemesanan</Text>
                
                <View style={styles.cont4}>
                    <View style={[styles.input]}>
                        <Text style={styles.subt_ps}>Bakauheni </Text>
                        <Fontisto name="arrow-right-l" size={24} color="black" />
                        <Text style={styles.subt_ps}>Merak </Text>
                    </View>

                    <View style={[styles.content_pes]}>
                        <Text>Jadwal Masuk Pelabuhan</Text>
                        <Text>xxxxx</Text>
                        <Text>xxxxx</Text>
                        <Text>Layanan</Text>
                        <Text>xxxxx</Text>
                        <View style={styles.Line}></View>
                        <Text>Dewasa</Text>
                    </View>
                    
                </View>
                

                <Text style={styles.subt_dp}>Data Pemesan</Text>
                
                <Text style={styles.subt2_dp}>Nama Lengkap</Text>
                <View style={styles.tampil_dtl}>
                    <Text ></Text>
                </View>
                
                <Text style={styles.subt2_dp}>Identitas</Text>
                <View style={styles.tampil_dtl}>
                    <Text ></Text>
                </View>

                <Text style={styles.subt2_dp}>Umur</Text>
                <View style={styles.tampil_dtl}>
                    <Text ></Text>
                </View>
                
                <KonfBayar></KonfBayar>
                
            </View>   
        </SafeAreaView>
        
    );
}