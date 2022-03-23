import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function Menu_awal({navigation}){
    console.log('aplikasi berjalan')
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cont2}>
                
                <Text style={styles.title}>Kapalzy</Text>

                <Text style={styles.sub_title}>Pelabuhan Awal</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TextInput placeholder='Pilih Pelabuhan Awal'
                    placeholderTextColor={'black'}
                    style={styles.txtinput}></TextInput>
                </View>
                
                
                <Text style={styles.sub_title}>Pelabuhan Tujuan</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TextInput placeholder='Pilih Pelabuhan Tujuan'
                    placeholderTextColor={'black'}
                    style={styles.txtinput}></TextInput>
                </View>

                <Text style={styles.sub_title}>Kelas Layanan</Text>
                <View style={styles.input}>
                    <Feather name="help-circle" size={21} color="#9D9D9D" />
                    <TextInput placeholder='Pilih Layanan'
                    placeholderTextColor={'black'}
                    style={styles.txtinput}></TextInput>
                </View>

                <Text style={styles.sub_title}>Tanggal Masuk Pelabuhan</Text>
                <View style={styles.input}>
                    <Feather name="calendar" size={21} color="#9D9D9D" />
                    <TextInput placeholder='Pilih Tanggal Masuk'
                    placeholderTextColor={'black'}
                    style={styles.txtinput}></TextInput>
                </View>

                <Text style={styles.sub_title}>Jam Masuk Pelabuhan</Text>
                <View style={styles.input}>
                    <Feather name="clock" size={21} color="#9D9D9D" />
                    <TextInput placeholder='Pilih Jam Masuk'
                    placeholderTextColor={'black'}
                    style={styles.txtinput}></TextInput>
                </View>

                <View >
                    <TextInput placeholder='Dewasa'
                    placeholderTextColor={'black'}
                    style={styles.juml}></TextInput>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Fontisto name="search" size={24} color="#FFFFFF"/>
                    <View style={styles.txt_but_around}>
                        <Text style={styles.txtbutt}>
                            Buat Tiket
                        </Text>
                    </View>
                    
                </TouchableOpacity>

            </View>

        </SafeAreaView>
        
    );
}