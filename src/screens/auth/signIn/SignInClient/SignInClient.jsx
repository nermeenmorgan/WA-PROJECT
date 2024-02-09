


import React from 'react';
// app.js
import { View, Text } from 'react-native';

import {   Image } from 'react-native';


import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';
// import { Container, Input, Title } from './SignInClient.styled';

const SignInClient = ({navigation}) => {
   return (
      // <Container>
      <Container>
      <Title style={{textAlign:'center'}}>Connectez-vous en tant que  
      <View style={{width:5}}></View>
    <Text style={{color:COLORS.greenColor}}>
    passager
    </Text>  
      </Title>
      <Image source= {require('../../../../../assets/Line.png')}
        alt= 'line'
          style= {{
            width: SIZES.width - 80,
            height: 10,
            marginBottom:50
          }}
          resizeMode="contain"
        />
      <Input
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor={'black'}
        padding={3}
      />

      <Input
        placeholder="Mot de passe"
        secureTextEntry
        placeholderTextColor={'black'}
      //   padding={100}
      />
     
       <View style={{height:50}}>
     </View>
     <CustomWhiteButton label={'se connecter'} onPress={()=>{navigation.navigate('ClientDashboard')}}></CustomWhiteButton>
     <View style={{height:40}}>
     </View>
     <View style={{display:'flex', flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Vous n'avez pas de compte ?
</Text>
<TouchableOpacity
onPress={()=>{navigation.navigate('SignUpClient')}}>
<Text style={{color: COLORS.greenColor, textDecorationLine: 'underline',fontWeight:'bold', marginLeft:5}}>Registre</Text>
</TouchableOpacity>
     </View>
    </Container>
   );
}
export default SignInClient

