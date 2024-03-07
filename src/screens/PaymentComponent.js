import React from 'react';
import {View, StyleSheet, Button, Text, Linking} from 'react-native';
// import { firstStep } from '../apis/paymob';
 import { initPayment } from '../apis/paymob/cinetpay';

const PaymentComponent = () => {
    const handleButtonPress = async () => {
        const payment_url = await initPayment(1000);
        if(payment_url){
            Linking.openURL(payment_url)
        }else{
            console.log('une erreur s\'est produite')
        }
      };
    return (
        <View style={{height:100, padding: 20}}>
             <Button title="Effectuer le paiement" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default PaymentComponent;
