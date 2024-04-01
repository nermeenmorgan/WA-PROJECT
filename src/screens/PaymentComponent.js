import React from 'react';
import {View, StyleSheet, Button, Text, Linking} from 'react-native';
// import { firstStep } from '../apis/paymob';
 import { initPayment, get_token, balance, add_contact } from '../apis/paymob/cinetpay';

const PaymentComponent = () => {
    const handleButtonPress = async () => {
        //*************many payment test ***************************/
        initPayment(1500);

        const payment_url = await initPayment(1000); // test to init payment and getting token is OKAY
        const token = await get_token() // test to get token OKAY
        const solde = await balance() // test to get balance OKAY

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
        if(payment_url){
            Linking.openURL(payment_url)
        }else{
            console.log('une erreur s\'est produite')
        }
      };
    return (
        <View style={{height:100, padding: 20, marginTop:'50%'}}>
             <Button title="Effectuer le paiement" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default PaymentComponent;



// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';

// const PaymentComponent = () => {
//     const [amount, setAmount] = useState('');

//     const handlePayment = async () => {
//         try {
//             // Convert amount to integer
//             // const amountInt = parseInt(amount);

//             // // Validate the amount
//             // if (isNaN(amountInt) || amountInt < 1000) {
//             //     Alert.alert('Error', 'Amount must be a number greater than or equal to 1000');
//             //     return;
//             // }

//             // // Make a POST request to initiate payment
//             // const response = await axios.post('YOUR_BACKEND_ENDPOINT/initPayment', { amount: amountInt });

//             // // Check if payment initiation was successful
//             // if (response.data && response.data.payment_url) {
//             //     // Redirect user to payment URL
//             //     // Note: In a real app, you might want to open the payment URL in a webview or a browser
//             //     // This example just navigates to the URL within the app, assuming it's a web-based payment system
//             //     Linking.openURL(response.data.payment_url);
//             // } else {
//             //     Alert.alert('Error', 'Failed to initiate payment');
//             // }
//             initPayment(1500);
//         } catch (error) {
//             console.error('Error initiating payment:', error);
//             Alert.alert('Error', 'An error occurred while initiating payment');
//         }
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <TextInput
//                 style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
//                 placeholder="Enter amount"
//                 keyboardType="numeric"
//                 value={amount}
//                 onChangeText={text => setAmount(text)}
//             />
//             <Button
//                 title="Pay"
//                 onPress={handlePayment}
//             />
//         </View>
//     );
// };

// export default PaymentComponent;
