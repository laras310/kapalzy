import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

//Screens
import Konfirmasi from './Konfirmasi';
import Beranda from './Beranda';
import Detail_pesanan from './Detail_Pesan';

const konfirmasiName = 'Konfirmasi';
const berandaName ='Beranda';
const detailName = 'Detail'

const Stack = createNativeStackNavigator();

export default function Stack_nav(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={berandaName} component={Beranda}/>
            <Stack.Screen name={konfirmasiName} component={Konfirmasi} />
            <Stack.Screen name ={detailName} component={Detail_pesanan}/>
        </Stack.Navigator>
    );
}