import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native'; // Import Alert
import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';

const SignInClient = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.4:5001/login-client', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.error) {
        Alert.alert('Error', data.error);
      } else {
        Alert.alert('Success', 'Login successful');
        navigation.navigate('ClientDashboard');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  };

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
        value={email}
        name='email'
        onChangeText={setEmail} 
      />

      <Input
      name='password'
      value={password}
        placeholder="Mot de passe"
        secureTextEntry
        placeholderTextColor={'black'}
        onChangeText={setPassword} 
      />
      
      <View style={{ height: 50 }}></View>
      <CustomWhiteButton
        label={'se connecter'}
        onPress={handleLogin}
      ></CustomWhiteButton>
      <View style={{ height: 40 }}></View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpClient')}>
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

export default SignInClient;
