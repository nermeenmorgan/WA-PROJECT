// import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Text,Image ,TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';

export default function Scan({navigation}) {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };


  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  const handleImageClick = () => {
    // Navigate to another component
    navigation.navigate('Scanner');
  };
  return (
    <>
  <Image style={styles.top} source={require('../../../assets/top.png')} />


    <View style={styles.container}>
<Text style={styles.head}>
   
    Click Here to open the scanner
</Text>
  <TouchableOpacity onPress={handleImageClick}>

<Image source={require('../../../assets/scan.png')}/>
</TouchableOpacity>
      {/* <Camera
        style={styles.camera}
        type={type}
        onBarCodeScanned={handleBarCodeScanned}
      >
        <View style={styles.overlay}>
        </View>
      </Camera> */}
    <Image style={styles.bottom} source={require('../../../assets/bottom.png')}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:170,
    paddingLeft:50,
    flex: 0.5,
    flexDirection: 'column',
    
  },
  head:{
fontWeight:'700',
marginBottom:40,
fontSize:20,
marginRight:40,
textAlign:'center'
// marginBottom:30,
  },
  camera: {
    flex: 1,
    aspectRatio: 1, // This sets the aspect ratio to make it a square
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
 bottom:{
    marginTop:180,
    // marginLeft:1,
    alignSelf:'center',
    // marginRight:100,
    width:400,
    marginRight:22
 },
 top:{
    // marginLeft:1,
    width:400,
    alignSelf:'center',
    // marginTop:1
 }
});
