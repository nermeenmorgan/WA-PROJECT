import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SuccessPage = () => {
    return (
        <View style={styles.container}>
        <Image
        source={require('../../assets/right.png')}
        alt="right icon"
        // style={{
        //   width: SIZES.width - 80,
        //   height: 10,
        //   marginBottom: 50,
        // }}
        style={styles.icon}
        resizeMode="contain"
      />
    
            <Text style={styles.message}>
            Votre transaction a été effectuée avec succès !
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 50, // Adjust width according to your icon size
        height: 50, // Adjust height according to your icon size
    },
    message: {
        textAlign: 'center',
        marginTop: 10, // Adjust spacing between icon and message
    },
});

export default SuccessPage;
