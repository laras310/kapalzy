import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function Daftar_Pesanan({navigation}){
    return(
        <SafeAreaView >
            <View style={styles.cont3}>
                <View style={[styles.input]}>
                    <Text style={styles.subt_ps}>Bakauheni </Text>
                    <Fontisto name="arrow-right-l" size={24} color="black" />
                    <Text style={styles.subt_ps}>Merak </Text>
                </View>

                <View>
                    <Text>Jadwal Masuk Pelabuhan</Text>
                    <Text>xxxxx</Text>
                    <Text>xxxxx</Text>
                    <Text>Layanan</Text>
                    <Text>xxxxx</Text>
                    <View style={styles.Line}></View>
                    <Text>Dewasa</Text>
                </View>
                
            </View>

        </SafeAreaView>
    );
}