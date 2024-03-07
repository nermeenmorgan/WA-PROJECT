import React from 'react';
// app.js
import { View, Text } from 'react-native';
import {   Image } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';
import CustomWhiteButton from '../../../../components/shared/whitebtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input, Title } from '../../../../constants/form.styled';
const SignUpClient = ({navigation}) => {
  const initialVal = {
    fname: '',
    lname: '',
    password: '',
    email: '',
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
   

    axios.post("http://localhost:5001/registerClient", initialVal)
      .then(response => {
        // Handle the response from the server
        console.log(response);
if(response.data.error ==='Student with the same Email address already exists'){
  alert("Student with the same Email address already exists");
}
        if(response.data.status=="ok"){
          alert("Register successful");
          
          window.location.href="./login-client";

              }
      })
      .catch(error => {
        console.error(error);
      });
  
   
    console.log(this.state);
  };
   return (
      // <Container>
      <Container>
      <Title>S'inscrire en tant que  
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
        placeholder="Entrez à votre nom"
        placeholderTextColor={'black'}
        
  name="name"
      />
      <Input
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor={'black'}
        padding={3}
        name = "email"
      />

<Input
        placeholder="Numéro de téléphone"
        name="phone"
        placeholderTextColor={'black'}
      />
      <Input
        placeholder="Mot de passe"
        secureTextEntry
        placeholderTextColor={'black'}

      name="password"
      />
     
       <View style={{height:50}}>
     </View>
     <CustomWhiteButton label={'enregistrer'} onPress={()=>{navigation.navigate('ClientDashboard')}}></CustomWhiteButton>
     <View style={{height:40}}>
     </View>
     <View style={{display:'flex', flexDirection:'row'}}>
<Text style={{fontWeight:'bold'}}>Vous avez déjà un compte? 
</Text>
<TouchableOpacity
onPress={()=>{navigation.navigate('SignInClient')}}>
<Text style={{color: COLORS.greenColor, textDecorationLine: 'underline',fontWeight:'bold', marginLeft:5}}>Se connecter</Text>
</TouchableOpacity>
     </View>
    </Container>
   );
}



 
export default SignUpClient;
