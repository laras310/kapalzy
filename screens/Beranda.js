import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import PelAwal from './PopUp/PelAwal';


export default function Menu_awal({navigation}){
    console.log('aplikasi berjalan');

    //dateTimePicker
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateText, setdateText]= useState('Pilih Tanggal Masuk')
    const [timeText, setTimeText]= useState('Pilih Jam Masuk')

    const onChange =(event, selectedDate) =>{
        let pickMode = mode + 'Text';
        const currDate=selectedDate || pickMode
        setShow(false);
        
        if(currDate != pickMode){
            setDate(currDate);
            let temp=new Date(currDate);

            if(mode=='date'){
                let fdate = temp.getDate() + '-' + (temp.getMonth()+1) + '-' + temp.getFullYear();
                setdateText(fdate);
                console.log(fdate);
            } else if(mode=='time') {
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
            <ScrollView>
                <View style={styles.cont2}>
                    
                    <Text style={styles.title}>Kapalzy</Text>

                    {/* modal */}
                    <PelAwal></PelAwal>

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
                            <Text style={styles.txtinput}>{timeText}</Text>
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
                            <TextInput placeholder='1'></TextInput>
                            <Text >Orang</Text>
                        </View>      
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

                </View>
            </ScrollView>

        </SafeAreaView>
        
    );
}