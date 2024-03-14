// // import React, { useRef, useState } from 'react';
// // import { View, StyleSheet, Text, Button, Platform, TextInput, Alert } from 'react-native';
// // import QRCode from 'react-native-qrcode-svg';
// // import { captureRef } from 'react-native-view-shot';
// // import * as FileSystem from 'expo-file-system';

// // const OwnerDashboard = () => {
// //   const [qrCode, setQrCode] = useState('default');
// //   const qrCodeRef = useRef(null);
// //   const viewShotRef = useRef(null);

// //   const handleDownLoadQrCode = async () => {
// //     try {
// //       if (Platform.OS === 'android') {
// //         const granted = await requestStoragePermission();
// //         if (!granted) {
// //           Alert.alert('Permission denied');
// //           return;
// //         }
// //       }

// //       const uri = await captureRef(viewShotRef, {
// //         format: 'png',
// //         quality: 1.0,
// //       });

// //       const path = FileSystem.cacheDirectory + qrCode + '.png';
// //       await FileSystem.moveAsync({ from: uri, to: path });
// //       await FileSystem.downloadAsync(path, uri);
// //       Alert.alert('QR CODE has been downloaded successfully');

// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const requestStoragePermission = async () => {
// //     try {
// //       const granted = await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
// //       );
// //       return granted === PermissionsAndroid.RESULTS.GRANTED;
// //     } catch (error) {
// //       console.error(error);
// //       return false;
// //     }
// //   };

// //   return (
// //     <View>
// //       <View
// //         collapsable={false}
// //         ref={viewShotRef}
// //         style={{ alignItems: 'center', justifyContent: 'center' }}
// //       >
// //         <QRCode
// //           ref={qrCodeRef}
// //           value={qrCode ? qrCode : 'default'}
// //           size={200}
// //           color='black'
// //           backgroundColor='white'
// //         />
// //       </View>
// //       <TextInput onChangeText={(text) => setQrCode(text)} />
// //       <Button title='Download QR Code' onPress={handleDownLoadQrCode} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({});

// // export default OwnerDashboard;



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
      {/* ) : ( */}
        <>
          {/* <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
            <View style={{ padding: '4%' }}>
              <QRCode value={generatedQRCode} size={200} />
            </View> */}
          {/* </ViewShot> */}
          {/* <Button title="Download QR Code" onPress={handleDownload} /> */}
        </>
      {/* )} */}
    </View>
  );
};

export default OwnerDashboard;
// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// const OwnerDashboard = () => {
//   return (
//     <View>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({})

// export default OwnerDashboard;
