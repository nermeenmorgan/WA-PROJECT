import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button , Icon} from "native-base";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text , Image} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const slides = [
  {
    id: 1,
    title: "Inscrivez-vous maintenant pour des paiements fluides lors de vos voyages !",
    image: require("../../assets/onboarding/onboarding1.png"),
  },
  {
    id: 2,
    title: "Scannez simplement le code QR pour un paiement rapide.",
    image: require("../../assets/onboarding/onboarding2.png"),
  },
  {
    id: 3,
    title: "Rapide, facile et sécurisé – créez votre compte dès aujourd'hui !",
    image: require("../../assets/onboarding/onboarding3.png"),
  }
];

const Stack = createNativeStackNavigator();

export default function Home() {
  const [showHomePage, setShowHomePage] = useState(false);
  const navigation = useNavigation(); // Move the hook inside the functional component

  const buttonLabel = (label) => {
    return (
      <View style={{ margin: 10, padding: 12, backgroundColor: 'green', borderRadius: 8 }}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {label}
        </Text>
      </View>
    );
  };





   if(!showHomePage){
    return(
      <AppIntroSlider
  data = {slides}
  renderItem={({item})=>{
    return(
      <View
      style={{
        flex:1,
        alignItems:"center",
        padding:15,
        paddingTop:100,
      }}
      >
        <Image source= {item.image}
        alt= {`img of index ${item.id}`}
          style= {{
            width: SIZES.width - 80,
            height: 350
          }}
          resizeMode="contain"
        />
        <Text
        style={{
          fontWeight: 'bold',
        textAlign:"center",
          color: COLORS.title,
          fontSize: SIZES.h3,
          
        }}
        >
          {item.title}
        </Text>
        {
         (item.id === 1 || item.id === 2) &&(
 
    <View style={{display:"flex", flexDirection:"row", marginTop:"25%"}}>
        <TouchableOpacity
        onPress={()=>{}}
        >
        <Text
        style={{fontSize: 20, marginRight:"20%"}}>
         Sauter
        </Text>
        </TouchableOpacity>
        <Button label="Commencer" style={{
         width:"50%",
         // height:"150%",
       alignContent:"center",
       alignItems:"center",
         backgroundColor:COLORS.greenColor
        }} onPress={()=>{
          console.log(navigation.navigate);
        }}>
        <View style={{
         alignItems:"center",
         display:"flex",
         flexDirection:"row",
         alignContent:'center',
         justifyContent:"center"
         }}>
         <Text
         style={{color:"white",
         marginRight:"22%",
        fontWeight: "bold",
        fontSize: 17
         }}>
           Commencer
         </Text>
         <Icon style={{color:"white"}} as={Ionicons} name="arrow-forward" />
 </View>
        </Button>
        </View>)
       
        }
        {
         (item.id === 3) &&(
    <View style={{display:"flex", flexDirection:"row", marginTop:"25%", justifyContent:"center"}}>
    <Button label="Commencer" style={{
         width:"50%",
         // height:"150%",
       alignContent:"center",
       alignItems:"center",
         backgroundColor:COLORS.greenColor
        }} onPress={()=>{
         console.log(navigation.navigate);
        }}>
        <View style={{
         alignItems:"center",
         display:"flex",
         flexDirection:"row",
         alignContent:'center',
         justifyContent:"center"
         }}>
         <Text
         style={{color:"white",
         marginRight:"22%",
        fontWeight: "bold",
        fontSize: 17
         }}>
           Commencer
         </Text>
         <Icon style={{color:"white"}} as={Ionicons} name="arrow-forward" />
 </View>
        </Button>
        </View>)
       
        }
      </View>
    )
  }}
  activeDotStyle={{
    backgroundColor: COLORS.primary,
    width:30,
  }}
  showSkipButton
  renderNextButton={()=>{buttonLabel("Next")}}
  renderSkipButton={()=>{buttonLabel("Skip")}}
  renderDoneButton={()=>{buttonLabel("Done")}}
  onDone={()=>{
  setShowHomePage(true)}}
      />
    )
   }
  return (
    <div>
      
    </div>
  )
}
