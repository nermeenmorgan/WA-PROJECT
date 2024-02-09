import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';

const SignInOwner = ({ navigation }) => {
  return (
    <Container>
      <Title style={{ textAlign: 'center' }}>
        Connectez-vous en tant que
        <View style={{ width: 5 }}></View>
        <Text style={{ color: COLORS.greenColor }}>propriétaire de véhicule</Text>
      </Title>
      <Image
        source={require('../../../../../assets/Line.png')}
        alt="line"
        style={{
          width: SIZES.width - 80,
          height: 10,
          marginBottom: 50,
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
      />
      
      <View style={{ height: 50 }}></View>
      <CustomWhiteButton
        label={'se connecter'}
        onPress={() => {
          // Use navigation to navigate to the "SignInClient" screen
          navigation.navigate('OwnerDashboard');
        }}
      ></CustomWhiteButton>
      <View style={{ height: 40 }}></View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('SignUpOwner')}}>
          <Text
            style={{
              color: COLORS.greenColor,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginLeft: 5,
            }}
          >
            Registre
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignInOwner;
