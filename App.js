
import * as React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Menu_awal from './screens/Beranda';
import MainContainer from './screens/MainContainer';
// import bayar from './screens/Bayaar';
// import Pesanan from './screens/Pesanan';


// const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <MainContainer>

    </MainContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='MainContainer' screenOptions={{headerShown:false}}>
    //     <Stack.Screen name='Menu_awal' component={Menu_awal}/>
    //     <Stack.Screen name='MainContainer' component={MainContainer}/>
    //     <Stack.Screen name='bayar' component={bayar}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}