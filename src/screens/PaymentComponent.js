import React from 'react';
import {View, StyleSheet, Button, Text, Linking} from 'react-native';
// import { firstStep } from '../apis/paymob';
 import { initPayment, get_token, balance, add_contact } from '../apis/paymob/cinetpay';

const PaymentComponent = () => {
    const handleButtonPress = async () => {
        //*************many payment test ***************************/

        // const payment_url = await initPayment(1000); // test to init payment and getting token is OKAY
        //const token = await get_token() // test to get token OKAY
        //const solde = await balance() // test to get balance OKAY

        let data = [
            {
                "prefix": "224",
                "phone": "612649548",
                "name": "David",
                "surname": "David test",
                "email": "kwamenjosue@gmail.com"
            }
        ]

        const newContact = await add_contact(data)

        console.log('newContact ===>>>', newContact)
        // if(payment_url){
        //     Linking.openURL(payment_url)
        // }else{
        //     console.log('une erreur s\'est produite')
        // }
      };
    return (
        <View style={{height:100, padding: 20}}>
             <Button title="Effectuer le paiement" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default PaymentComponent;
