import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native'; // Import Alert
import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';
import axios from 'axios';
const SignUpOwner = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const guineaPhoneNumberRegex = /^(00224|\+224)?[6-7][0-9]{7}$/;

    if (!guineaPhoneNumberRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid Guinea phone number.');
      return;
    }
    console.log('Signing up...'); 
    try {
      const response = await axios.post('http://192.168.1.4:5001/registerOwner', {
        name,
        email,
        phone,
        password,
      });
      console.log('Response data:', response.data); 
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('SignInOwner');
    } catch (error) {
      console.error('Errorrrrrrr:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <Container>
      <Title>
        S'inscrire en tant que
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
        placeholder="Name"
        value={name}
        onChangeText={setName}
        keyboardType="email-address"
        placeholderTextColor={'black'}
        padding={3}
        name="name"
      />
      <Input
      name='email'
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor={'black'}
        padding={3}
      />
      <Input
      name='phone'
        value={phone}
        onChangeText={setPhone}
        placeholder="Numéro de téléphone"
        placeholderTextColor={'black'}
      />
      <Input
      name='password'
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        secureTextEntry
        placeholderTextColor={'black'}
      />
      <View style={{ height: 50 }}></View>
      <CustomWhiteButton label={'enregistrer'} onPress={handleSignUp}></CustomWhiteButton>
      <View style={{ height: 40 }}></View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold' }}>Vous avez déjà un compte? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInOwner')}>
          <Text
            style={{
              color: COLORS.greenColor,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginLeft: 5,
            }}
          >
            Se connecter
          </Text>
        </TouchableOpacity>
    
      </View>
      <TouchableOpacity onPress={()=>{  navigation.navigate('OwnerDashboard');}}>
        <Text   style={{
              color: COLORS.greenColor,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginLeft: 5,
            }}>Skip Registration</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SignUpOwner;
