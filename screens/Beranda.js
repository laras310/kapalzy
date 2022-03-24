import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Menu_awal({navigation}){
    console.log('aplikasi berjalan');
    const [modal,setModal] = useState(false);



    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateText, setdateText]= useState('Pilih Tanggal Masuk')
    const [timeText, setTimeText]= useState('Pilih Jam Masuk')

    const onChange =(event, selectedDate) =>{
        
        if (mode=='date') {
            const currDate= selectedDate || dateText;
            setShow(false);
            if(currDate!=dateText){
                setDate(currDate);
                let temp=new Date(currDate);
                let fdate = temp.getDate() + '-' + (temp.getMonth()+1) + '-' + temp.getFullYear();
                setdateText(fdate);
                console.log(fdate);
            }

        } else if(mode=='time') {
            const currDate= selectedDate || timeText;
            setShow(false);
            if(currDate!=timeText){
                setDate(currDate);
                let temp=new Date(currDate);
                let ftime = temp.getHours() + ':' + temp.getMinutes();
                setTimeText(ftime);
                console.log(ftime+' '+mode);    
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


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cont2}>
                
                <Text style={styles.title}>Kapalzy</Text>

                <Text style={styles.sub_title}>Pelabuhan Awal</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input} onPress={()=> setModal(!modal)}
>
                        <Text style={styles.txtinput}>Pilih Pelabuhan Awal</Text>
                    </TouchableOpacity>
                    
                </View>
                
                
                <Text style={styles.sub_title}>Pelabuhan Tujuan</Text>
                <View style={styles.input}>
                    <Fontisto name="ship" size={24} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input}>
                        <Text style={styles.txtinput}>Pilih Pelabuhan Tujuan</Text>
                    </TouchableOpacity>
                   
                </View>

                <Text style={styles.sub_title}>Kelas Layanan</Text>
                <View style={styles.input}>
                    <Feather name="help-circle" size={21} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input}>
                        <Text style={styles.txtinput}>Pilih Layanan</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sub_title}>Tanggal Masuk Pelabuhan</Text>
                <View style={styles.input}>
                    <Feather name="calendar" size={21} color="#9D9D9D" />
                    <TouchableOpacity  style={styles.input}
                    onPress={()=>{showDatepicker()} }
                    >
                        <Text style={styles.txtinput}>
                            {dateText}
                            {/* {date.toDateString} */}
                        </Text>
                    </TouchableOpacity>
                    
                </View>

                <Text style={styles.sub_title}>Jam Masuk Pelabuhan</Text>
                <View style={styles.input}>
                    <Feather name="clock" size={21} color="#9D9D9D" />
                    <TouchableOpacity style={styles.input} 
                    onPress={()=>{showTimepicker()}}
                    >
                        <Text style={styles.txtinput}>{timeText}</Text>
                    </TouchableOpacity>
                </View>

                {show && (
                    <DateTimePicker testID='dateTimePicker'
                    value={date}
                    mode={mode} is24Hour={true}  onChange={onChange} on/>
                )}
                
                <TouchableOpacity style={[{width:320,height:40,marginTop:10,marginLeft:10,padding:10,flexDirection:'row',backgroundColor:'#EFF4F4',borderRadius:4, borderColor:'black',}]}>
                                <View>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'left'}]}>
                                        Dewasa
                                    </Text>
                                </View>
                                <View style={[{marginLeft:200, flexDirection:'row',}]}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'right'}]}>
                                        1
                                    </Text>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19, fontWeight:'bold', textAlign:'right'}]}>
                                        Orang
                                    </Text>
                                </View>
                            </TouchableOpacity>
                <View >
                    <TextInput placeholder='Dewasa'
                    placeholderTextColor={'black'}
                    style={styles.juml}></TextInput>
                </View>
                
                <View style={styles.txt_but_around}>
                    <TouchableOpacity   style={styles.button}
                                        onPress={()=>navigation.navigate("Konfirmasi")}
                                        >
                        <Fontisto name="search" size={24} color="#FFFFFF"/>
                        
                        <Text style={styles.txtbutt}>
                            Buat Tiket
                        </Text>
                        
                    </TouchableOpacity>    
                </View>
                
                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModal(!modal);
                        }}
                    >
                    <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeader}>
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH LAYANAN
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => setModal(!modal)}>
                                        <Text style={[{ fontSize:16 }]}>
                                            Express
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => setModal(!modal)}>
                                        <Text style={[{ fontSize:16 }]}>
                                            Reguler
                                        </Text>
                                    </TouchableOpacity>
                                </View>
</View>
                        </View>
                    </Modal>

            </View>

        </SafeAreaView>
        
    );
}