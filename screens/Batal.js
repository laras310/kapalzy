import * as React from 'react';
import {View,Text, SafeAreaView,Image} from 'react-native';
import styles from '../style/global';

export default function Batal({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={[{alignItem:'center', justifyContent:'center', alignItems:'center'}]}>
                
                <Image
                    source={require('../assets/ticket.png' )}
                    style={{width:150, height:150}}
                    />
                <Text style ={styles.txt_btl}>
                    Tidak ada Aktivitas Pembatalan Tiket
                </Text>
            </View>
        </SafeAreaView>
        
    );
}