import React, {useState} from 'react'
import { Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import styles from '../../style/global';
import {Pelabuhan,Layanan} from '../../database/Data';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function PelAwal(){
    const [modal,setModal] = useState(false);
    const [modal2, setModal2]=useState(false);
    const [modal3, setModal3]=useState(false);
    const [paTxt, setpaTxt]=useState('Pilih Pelabuhan Awal');
    const [ptTxt, setptTxt]=useState('Pilih Pelabuhan Tujuan');
    const [layTxt, setlayTxt]=useState('Pilih Layanan');

    const [awal,setAwal] = useState(Pelabuhan);
    const [tujuan, setTujuan] =useState(Pelabuhan);
    const [lay, setLay]=useState(Layanan)

    return(
            <View >
                <Text style={styles.sub_title}>Pelabuhan Awal</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input} onPress={()=> setModal(!modal)}>
                        <Text style={styles.txtinput}>{paTxt}</Text>
                    </TouchableOpacity>
                    
                </View>
                
                
                <Text style={styles.sub_title}>Pelabuhan Tujuan</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input} onPress={()=> setModal2(!modal2)}>
                        <Text style={styles.txtinput}>{ptTxt}</Text>
                    </TouchableOpacity>
                   
                </View>

                <Text style={styles.sub_title}>Kelas Layanan</Text>
                <View style={styles.input}>
                    <Feather name="help-circle" size={21} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input} onPress={()=> setModal3(!modal3)}>
                        <Text style={styles.txtinput}>{layTxt}</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Modal1 */}
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                        setModal(!modal);
                        }} >
                    
                    <View 
                    style={styles.centeredView}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    PILIH Pelabuhan
                                </Text>
                            </View>
                            <View style={[{padding:20,}]}>
                                <FlatList
                                    data={awal}
                                    keyExtractor={item =>item.Key}
                                    renderItem={({item, index})=>{
                                        return <View style={[{justifyContent:'center'}]}>
                                                    <TouchableOpacity style={[{marginVertical:10,}]} onPress={() => {setModal(!modal); setpaTxt(item.plbh_nama)}}>
                                                        <Text style={[{fontSize:13}]}>{item.plbh_kota}</Text>
                                                        <Text style={[{fontSize:16}]}>{item.plbh_nama}</Text>
                                                    </TouchableOpacity>
                                                        <View style={styles.Line}/>
                                                </View>
                                    }}
                                />
                            
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* modal2 */}
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal2}
                        onRequestClose={() => {
                        setModal2(!modal2);
                        }} >
                    
                    <View 
                    style={styles.centeredView}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    PILIH Pelabuhan
                                </Text>
                            </View>
                            <View style={[{padding:20,}]}>
                                <FlatList
                                    data={tujuan}
                                    keyExtractor={item =>item.Key}
                                    renderItem={({item, index})=>{
                                        return <View style={[{justifyContent:'center'}]}>
                                                    <TouchableOpacity style={[{marginVertical:10,}]} onPress={() => {setModal2(!modal2); setptTxt(item.plbh_nama)}}>
                                                        <Text style={[{fontSize:13}]}>{item.plbh_kota}</Text>
                                                        <Text style={[{fontSize:16}]}>{item.plbh_nama}</Text>
                                                    </TouchableOpacity>
                                                        <View style={styles.Line}/>
                                                </View>
                                    }}
                                />
                            
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal3}
                        onRequestClose={() => {
                        setModal3(!modal3);
                        }} >
                    <View 
                    style={styles.centeredView}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    PILIH LAYANAN
                                </Text>
                            </View>
                            <View style={[{padding:20,}]}>
                                <FlatList
                                    data={lay}
                                    keyExtractor={item =>item.Key}
                                    renderItem={({item, index})=>{
                                        return <View style={[{justifyContent:'center'}]}>
                                                    <TouchableOpacity style={[{marginVertical:10,}]} onPress={() =>{setModal3(!modal3); setlayTxt(item.layanan)}}>
                                                        <Text style={[{fontSize:20,}]}>{item.layanan}</Text>
                                                    </TouchableOpacity>
                                                        <View style={styles.Line}/>
                                                </View>
                                    }}
                                />
                            
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
    );
}