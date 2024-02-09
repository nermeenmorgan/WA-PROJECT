import React from 'react';
// app.js
import { View, Text } from 'react-native';

import {TextInput,   Image } from 'react-native';


import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';
// import { Container, Input, Title } from './SignInClient.styled';

const SignUpOwner = ({navigation}) => {
   return (
      // <Container>
      <Container>
      <Title>S'inscrire en tant que  
      <View style={{width:5}}></View>
    <Text style={{color:COLORS.greenColor}}>
    propriétaire de véhicule
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
        placeholder="Numéro de téléphone"
        
        placeholderTextColor={'black'}
      //   padding={30}
      />
      <Input
        placeholder="Mot de passe"
        secureTextEntry
        placeholderTextColor={'black'}
      //   padding={100}
      />
      <Input
        placeholder=" Entrez à nouveau le mot de passe"
        placeholderTextColor={'black'}
        secureTextEntry
  
      />
       <View style={{height:50}}>
     </View>
     <CustomWhiteButton label={'enregistrer'} onPress={()=>{navigation.navigate('OwnerDashboard')}}></CustomWhiteButton>
     <View style={{height:40}}>
     </View>
     <View style={{display:'flex', flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Vous avez déjà un compte? 
</Text>
<TouchableOpacity
onPress={()=>{navigation.navigate('SignInOwner')}}>
<Text style={{color: COLORS.greenColor, textDecorationLine: 'underline',fontWeight:'bold', marginLeft:5}}>Se connecter</Text>
</TouchableOpacity>
     </View>
    </Container>
   );
}



 
export default SignUpOwner;
