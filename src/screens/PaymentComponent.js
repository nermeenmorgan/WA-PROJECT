import React from 'react';
import {View, StyleSheet} from 'react-native';
import { firstStep } from '../apis/paymob';

const PaymentComponent = () => {
    const handleButtonPress = async () => {
        await firstStep();
      };
    return (
        <View>
             <Button title="Press me" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default PaymentComponent;
