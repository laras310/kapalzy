import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function Daftar_Pesanan({navigation}){
    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.cont3}>
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

                <View style={styles.cont3}>
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

                <View style={styles.cont3}>
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

                <View style={styles.cont3}>
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
            </ScrollView>
            

        </SafeAreaView>
    );
}