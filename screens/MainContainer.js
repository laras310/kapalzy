import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto,FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Detail from './Detail';
import Bayar from './Bayar';
import Menu_awal from './Beranda';
import Lainnya from './Lainnya';

//screens names
const detailName= 'Detail';
const bayarName= 'Bayar';
const berandaName ='Menu_Awal'
const lainnyaName ='Lainnya'

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Menu_awal' screenOptions={{tabBarActiveTintColor: '#00579C',headerShown:false}}>

            <Tab.Screen name ={berandaName} component={Menu_awal} options={{
                                                                        tabBarLabel: 'Beranda',
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <Fontisto name="home" size={24} color={color} />
                                                                        ),
            }}/>
            <Tab.Screen name ={detailName} component={Detail} options={{ headerShown:true,
                                                                        headerTitle:'Daftar Pemesanan',
                                                                        headerStyle:{backgroundColor:'#00579C',},
                                                                        headerTitleStyle:{color:'white'},
                                                                        headerTitleAlign:'center',
                                                                        tabBarLabel: 'Pesanan Saya', 
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <FontAwesome5 name="book" size={24} color={color} />),
            }}/>
            <Tab.Screen name ={bayarName} component={Bayar} options={{ 
                                                                        tabBarLabel: 'Pembatalan', 
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <Fontisto name="credit-card" size={24} color={color} />),
            }}/>
            <Tab.Screen name ={lainnyaName} component={Lainnya} options={{ 
                                                                        tabBarLabel: 'Lainnya', 
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <FontAwesome5 name="bars" size={24} color={color} />),
            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}