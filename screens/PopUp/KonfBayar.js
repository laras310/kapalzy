import React, {useState} from 'react'
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import styles from '../../style/global';
import { useNavigation } from '@react-navigation/native';

export default function KonfBayar(){
    const [modal,setModal] = useState(false);
    const navigation = useNavigation(); 
    return(
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
                                onPress={() => navigation.navigate('Beranda')}>
                                    <Text style={styles.txtbutt}>
                                        Selesai
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
    );
}