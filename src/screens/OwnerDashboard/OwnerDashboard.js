


import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import CustomWhiteButton from '../../components/shared/whitebtn';

const OwnerDashboard = () => {
  // const [url, setUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [generatedQRCode, setGeneratedQRCode] = useState(null);
  const viewShotRef = useRef(null);

  const generateQRCode = () => {
    const guineaPhoneNumberRegex = /^(00224|\+224)?[6-7][0-9]{7}$/;

    if (!guineaPhoneNumberRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid Guinea phone number.');
      return;
    }
    // if (!url) {
    //   Alert.alert('Error', 'Please enter a valid URL');
    //   return;
    // }

    // setGeneratedQRCode(url);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* {!generatedQRCode ? ( */}
        <>
          <TextInput
          value={phone}
            placeholder="Enter your number"
            keyboardType='numeric'
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            onChangeText={(value) => setPhone(value)}
          />
          <CustomWhiteButton  label="Generate QR Code"  onPress={generateQRCode} />
        </>
   
        <>
       
       
       
       
       
       
        </>
    </View>
  );
};

export default OwnerDashboard;
 



