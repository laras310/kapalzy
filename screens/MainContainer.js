import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto,FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//import screens
import Daftar_Pesanan from './Daftar_Pesanan';
import Batal from './Batal';
import Stack_nav from './Stack_nav';
import Lainnya from './Lainnya';

//screens names
const Daftar_PesananName= 'Daftar_Pesanan';
const batalName= 'Batal';
const berandaName ='Menu_Awal';
const lainnyaName ='Lainnya';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Menu_awal' screenOptions={{tabBarActiveTintColor: '#00579C',headerShown:false}}>

            <Tab.Screen name ={berandaName} component={Stack_nav} options={{
                                                                        tabBarLabel: 'Beranda',
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <Fontisto name="home" size={24} color={color} />
                                                                        ),
            }}/>
            <Tab.Screen name ={Daftar_PesananName} component={Daftar_Pesanan} options={{ headerShown:true,
                                                                        headerTitle:'Daftar Pemesanan',
                                                                        headerStyle:{backgroundColor:'#00579C',},
                                                                        headerTitleStyle:{color:'white'},
                                                                        headerTitleAlign:'center',
                                                                        tabBarLabel: 'Pesanan Saya', 
                                                                        tabBarIcon: ({ color, size }) => (
                                                                        <FontAwesome5 name="book" size={24} color={color} />),
            }}/>
            <Tab.Screen name ={batalName} component={Batal} options={{ headerShown:true,
                                                                        headerTitle:'Daftar Pembatalan',
                                                                        headerStyle:{backgroundColor:'#00579C',},
                                                                        headerTitleStyle:{color:'white'},
                                                                        headerTitleAlign:'center',
                                                                        tabBarLabel: 'Pesanan Saya',
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