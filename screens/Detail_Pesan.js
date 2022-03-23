import * as React from 'react';
import {View,Text} from 'react-native';

export default function Detail_pesanan({navigation}){
    return(
        <View style={({flex:1, alignItems:'center', justifyContent:'center'})}>
            <Text onPress={() => navigation.navigate('Bayar')}>
                lainnya
            </Text>
        </View>
    );
}