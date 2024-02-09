import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import CustomGreenButton from '../../../../components/shared/greenBtn';
// import { Container } from '../../../../constants/form.styled';
import CustomGreenButton from '../../components/shared/greenBtn';
import { Container } from '../../constants/form.styled';

const HomeScreen = ({navigation}) => {
   return (
      <Container>
         <Image
            source={require("../../../assets/home/homeImgOne.png")}
            alt='imgHomeOne'
            style={{width:"95%", height:200, marginTop:60, alignSelf:'center', borderRadius:10 }}
         />
                  <View style={{height:40}}>
</View>
         <CustomGreenButton label={'Je suis propriétaire d un véhicule'} onPress={()=>{
            navigation.navigate('SignUpOwner')
         }}/>
         <View style={{height:1}}>
         <Image
                     style={{ marginTop:20, }}
            source={require("../../../assets/home/LineHome.png")}
            alt='imgHomeLine'
         />
</View>
         <Image
                     style={{width:"80%", height:'30%', marginTop:60, alignSelf:'center', borderRadius:10 }}

            source={require("../../../assets/home/homeImgTwo.png")}
            alt='imgHomeTwo'
         />
         <View style={{height:10}}>

         </View>
         <CustomGreenButton label={'je suis passager'}
         onPress={()=>{
            navigation.navigate('SignUpClient')
         }}
          />

      </Container>
   );
}

const styles = StyleSheet.create({})

export default HomeScreen;
