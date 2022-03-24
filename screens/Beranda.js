import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';
// import DatePicker from 'react-native-date-picker'

import DateTimePicker from '@react-native-community/datetimepicker';


export default function Menu_awal({navigation}){
    console.log('aplikasi berjalan');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateText, setdateText]= useState('Pilih Tanggal Masuk')
    const [timeText, setTimeText]= useState('Pilih Jam Masuk')

    const onChange =(event, selectedDate) =>{
        const currDate= selectedDate || date;
        
        setDate(currDate);
        setShow(false);
        
        let temp=new Date(currDate);
        
        if (mode=='date') {
            let fdate = temp.getDate() + '-' + (temp.getMonth()+1) + '-' + temp.getFullYear();
            setdateText(fdate);
            console.log(fdate);
        } else if(mode=='time') {
            let ftime = temp.getHours() + ':' + temp.getMinutes();
            setTimeText(ftime);
            console.log(ftime+' '+mode);
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
                    <TouchableOpacity style={styles.input}>
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
                    {/* <DateTimePickerModal mode='time'/> */}
                </View>

                {show && (
                    <DateTimePicker testID='dateTimePicker'
                    value={date}
                    mode={mode} is24Hour={true}  onChange={onChange} on/>
                )}
                

                <View >
                    <TextInput placeholder='Dewasa'
                    placeholderTextColor={'black'}
                    style={styles.juml}></TextInput>
                </View>

                <TouchableOpacity   style={styles.button}
                                    onPress={()=>navigation.navigate("Konfirmasi")}
                                    >
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