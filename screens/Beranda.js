import { Text, View, SafeAreaView, TextInput, TouchableOpacity,Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Pelabuhan,Layanan} from '../database/Data';

export default function Menu_awal({navigation}){
    // console.log('aplikasi berjalan');
    
    //modal pop-up
    const [modal,setModal] = useState(false);
    const [modal2, setModal2]=useState(false);
    const [modal3, setModal3]=useState(false);
    const [paTxt, setpaTxt]=useState('Pilih Pelabuhan Awal');
    const [ptTxt, setptTxt]=useState('Pilih Pelabuhan Tujuan');
    const [layTxt, setlayTxt]=useState('Pilih Layanan');
    const [hargaTxt, sethargaTxt] = useState();
    const [totalTxt, setTotal] = useState();
    const [kuotaTxt,setKuota]= useState();

    //flatlist
    const [awal,setAwal] = useState(Pelabuhan);
    const [tujuan, setTujuan] =useState(Pelabuhan);
    const [lay, setLay]=useState(Layanan);

    //dateTimePicker
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateText, setdateText]= useState('Pilih Tanggal Masuk');
    const [timeText, setTimeText]= useState('Pilih Jam Masuk');
    
    const [jumlah,setJumlah]=useState(1);
    // const [jumlahFix, setjumlahFix] = useState()

    //Hari dan Bulan
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const day=['Minggu','Senin', 'Selasa','Rabu','Kamis','Jumat','Sabtu']

    const onChange =(event, selectedDate) =>{
        let pickMode = mode + 'Text';
        const currDate=selectedDate || pickMode
        setShow(false);
        
        if(currDate != pickMode){
            setDate(currDate);
            let temp=new Date(currDate);

            if(mode=='date'){ 
                let monthName = months[temp.getMonth()]
                let dayName = day[temp.getDay()]
                let fdate =dayName+', '+temp.getDate() + ' '+monthName+' '+ temp.getFullYear();
                setdateText(fdate);
                // console.log(fdate);
            } else if(mode=='time') {
                let ftime = temp.getHours()+ ':' + temp.getMinutes();
                setTimeText(ftime);
                // console.log(ftime+' '+mode);    
            }
        }
    };

    const showMode=(currentMode)=>{
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    const searchHarga = (selectedLayanan)=>{
        
        const currentLayanan = selectedLayanan;
        const curHarga = lay.filter((item)=>{
            if(item.layanan.toLowerCase()==currentLayanan.toLowerCase()){
                sethargaTxt(item.Harga)
        }})
    }

    const hitungTotal =(orang)=>{
        let hargaInt = Number(hargaTxt)
        let jumlahInt =Number(orang)
        setTotal(hargaInt*jumlahInt)
        console.log(hargaInt + ' ' +jumlahInt+ ' '+ totalTxt)
        // return totalTxt;
        
    }

    const hitungKuota=(selectedPA)=>{
        const currentPA = selectedPA;
        const curKuota = awal.filter((x)=>{
            if(x.plbh_nama.toLowerCase()==currentPA.toLowerCase()){
                setKuota(x.kuota)
                console.log(kuotaTxt+ ' '+ x.kuota)
            }
        })
    }


    return(
        <SafeAreaView style={styles.container}>
            
                <View style={styles.cont2}>
                    
                    <Text style={styles.title}>Kapalzy</Text>

                    {/* modal */}
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
                </View>

                    {/* DateTime */}
                    <Text style={styles.sub_title}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.input}>
                        <Feather name="calendar" size={21} color="#9D9D9D" />
                        <TouchableOpacity  style={styles.input}
                        onPress={()=>{showDatepicker()} }
                        >
                            <Text style={styles.txtinput}>
                                {dateText}
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <Text style={styles.sub_title}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.input}>
                        <Feather name="clock" size={21} color="#9D9D9D" />
                        <TouchableOpacity style={styles.input} 
                        onPress={()=>{showTimepicker()}}
                        >
                            <Text style={styles.txtinput} >{timeText}</Text>
                        </TouchableOpacity>
                    </View>

                    {show && (
                        <DateTimePicker testID='dateTimePicker'
                        value={date}
                        mode={mode} is24Hour={true}  onChange={onChange} on/>
                    )}
                    
                    <View style={styles.juml}>
                        <Text >Dewasa</Text>
                        <View style={[{flexDirection:'row'}]}>
                            <TextInput placeholder='1'
                            onChangeText={(val) => {setJumlah (val); hitungTotal(val)}}>
                            </TextInput>
                            <Text >Orang</Text>
                        </View>      
                    </View>
                    <View style={styles.txt_but_around}>
                        <TouchableOpacity   style={styles.button}
                                            onPress={()=>navigation.navigate("Konfirmasi", {tanggal:dateText, waktu:timeText, 
                                                                                            pelA:paTxt,pelT:ptTxt, layanan:layTxt, 
                                                                                            jumDewasa:jumlah,harga:hargaTxt,
                                                                                            total:totalTxt, kuota:kuotaTxt
                                                                                            }
                                                                                            )
                                                                                            }
                                            >
                            <Fontisto name="search" size={24} color="#FFFFFF"/>
                            
                            <Text style={styles.txtbutt}>
                                Buat Tiket
                            </Text>
                            
                        </TouchableOpacity>    
                    </View>

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
                                                    <TouchableOpacity style={[{marginVertical:10,}]} onPress={() => {setModal(!modal); hitungKuota(item.plbh_nama);setpaTxt(item.plbh_nama)}}>
                                                        <Text style={[{fontSize:9}]} >{item.plbh_kota}</Text>
                                                        <Text style={[{fontSize:13}]}>{item.plbh_nama}</Text>
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
                                                        <Text style={[{fontSize:9}]}>{item.plbh_kota}</Text>
                                                        <Text style={[{fontSize:13}]}>{item.plbh_nama}</Text>
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
                                                    <TouchableOpacity style={[{marginVertical:10,}]} onPress={() =>{setModal3(!modal3); setlayTxt(item.layanan);searchHarga(item.layanan) }}>
                                                        <Text style={[{fontSize:13,}]}>{item.layanan}</Text>
                                                    </TouchableOpacity>
                                                        <View style={styles.Line}/>
                                                </View>
                                    }}
                                />
                            
                            </View>
                        </View>
                    </View>
                </Modal>

        </SafeAreaView>
        
    );
}