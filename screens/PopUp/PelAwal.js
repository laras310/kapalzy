import React, {useState} from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal} from 'react-native';
import styles from '../../style/global';

import { Fontisto, Feather} from '@expo/vector-icons';

export default function PelAwal(){
    const [modal,setModal] = useState(false);
    const [modal2, setModal2]=useState(false);
    const [modal3, setModal3]=useState(false);
    const [paTxt, setpaTxt]=useState('Pilih Pelabuhan Awal');
    const [ptTxt, setptTxt]=useState('Pilih Pelabuhan Tujuan');
    const [layTxt, setlayTxt]=useState('Pilih Layanan');

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
                                <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setpaTxt('Bakauheni')}}>
                                    <Text style={[{ fontSize:13 }]}>
                                        Lampung
                                    </Text>
                                    <Text style={[{ fontSize:16 }]}>
                                        Bakauheni
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.Line}></View>
                                <TouchableOpacity style={[{marginVertical:15,}]} onPress={() => {setModal(!modal); setpaTxt('Bakauheni')}}>
                                    <Text style={[{ fontSize:13 }]}>
                                        Lampung
                                    </Text>
                                    <Text style={[{ fontSize:16 }]}>
                                        Bakauheni
                                    </Text>
                                </TouchableOpacity>
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
                    
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    PILIH LAYANAN
                                </Text>
                            </View>
                            <View style={[{padding:20,}]}>
                                <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setptTxt('Bakauheni')}}>
                                    <Text style={[{ fontSize:16 }]}>
                                        Lampung
                                    </Text>
                                    <Text style={[{ fontSize:16 }]}>
                                        Bakauheni
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setptTxt('Bakauheni')}}>
                                    <Text style={[{ fontSize:16 }]}>
                                        Lampung
                                    </Text>
                                    <Text style={[{ fontSize:16 }]}>
                                        Bakauheni
                                    </Text>
                                </TouchableOpacity>
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
                    
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                    PILIH LAYANAN
                                </Text>
                            </View>
                            <View style={[{padding:20,}]}>
                                <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setlayTxt('Express')}}>
                                    <Text style={[{ fontSize:16 }]}>
                                        Express
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setlayTxt('Reguler')}}>
                                    <Text style={[{ fontSize:16 }]}>
                                        Reguler
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
    );
}