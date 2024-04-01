import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Linking,

} from 'react-native';

import CustomWhiteButton from '../../components/shared/whitebtn';
import { SIZES } from '../../constants/theme';
const ClientDashboard = ({ navigation }) => {
  const lightStyles = StyleSheet.create({
    container: {
      height:SIZES.height- 160,
        // marginTop:'2%',
      // flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      // justifyContent: 'flex-start',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    transparentLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1, 
    },

    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      
    },
    detailsContainer: {
      width: '100%',
      backgroundColor: 'black',
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      
    },
    detailTitle: {
      marginRight: 10,
      width: 100,
      fontWeight:'700'
    },
    detailText: {
      flex: 1,
    },
  });

 

  const [clickedIcon, setClickedIcon] = useState(null);
const [isclicked, setisclicked] = useState(false)

  

  const styles =  lightStyles;


  const fadeAnim = useRef(new Animated.Value(0)).current;
  const handleEmailPress = () => {
    const email = 'Leanne@gmail.com';
    const subject = 'Hello';
    const body = 'Dear recipient,';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
  };
  
 

  return (
    <>
    <View style={styles.container}>
      <View
        style={{
        
          height: '32%',
          width: '100%',
          alignItems: 'center',
          borderBottomRightRadius: 120,
          backgroundColor:   'white',
          shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          borderBottomLeftRadius: 120,
        }}
      >
        <View
          header
          bordered
          style={{
            backgroundColor:    '#5DC98F',
            alignItems: 'center',
            // marginTop:'20%',
            padding: '2%',
            paddingLeft:20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            width: '90%',
            marginTop: 60,
            flexDirection: 'row',
          }}
        >
          
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight:'bold'
            }}
          >
            User Information
          </Text>
        </View>
        <View
          style={{
            backgroundColor:    'white',
            paddingLeft:20,
            padding: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: '90%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Identifiant: </Text>
            <Text style={styles.detailText}> 33333 </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Nom:</Text>
            <Text style={styles.detailText}>nermeen</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Telephone:</Text>
            <Text style={styles.detailText}>
             sampleadress
            </Text>
          </View>

       
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginTop:'12%',
          marginBottom:'15%',
        //   padding:'3%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 20,
        //   marginTop: 15,
          padding: 30,
        //   marginBottom: 5,
        }}
      >
      <Text style={{"fontWeight":'bold','textAlign':'center', 'fontSize':20}}>
      Bénéficiez d'un processus de paiement fluide et sans tracas pour votre chauffeur avec Orange Money.
      </Text>
     
      </View>
      
      <View style={{ position: 'relative', height: 80, width: '100%' }}>
        <View
          style={{
            backgroundColor: '#5DC98F',
            width: '100%',
            height: 90,
            position: 'absolute',
            top: 0,
            zIndex: 0,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 6,
              fontSize:17
            }}
          >
            Comment utiliser l'application
          </Text>
        </View>
        <View
          style={{
            padding:6,
            justifyContent:'space-around',
              backgroundColor:   'white',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: '100%',
            height: 150,
            position: 'absolute',
            top: 0,
            zIndex: 1,
              shadowColor: '#000',
            marginTop: 35,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >


          <View 
            style={{
              width: '30%',
              backgroundColor:  'white',
              borderRadius: 20,
              height: '80%',
              padding:6,
              marginRight:20,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{'textAlign':'center'}}>Scanner le code QR</Text>

          </View>


          <View
            style={{
              padding:6,
              width: '30%',
              marginRight:20,
              backgroundColor:  'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              height: '80%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
          
            <Text style={{'textAlign':'center', 
            
            }}>Entrez le montant</Text>
          </View>

          <View
            style={{
              width: '30%',
              padding:6,
              backgroundColor:   'white',
              borderRadius: 20,
              justifyContent: 'center',
              marginRight:7,
              alignItems: 'center',
              height: '80%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
           
            <Text style={{'textAlign':'center'}}>Confirmez votre paiement</Text>
          </View>
        </View>
      </View>
    
    </View>
    <View style={{
        backgroundColor:'white',
        width:SIZES.width,
        height:SIZES.height -720,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:85,
        marginBottom:200,
        textAlign:'center'
    }}>
        

    <CustomWhiteButton label={'Payer avec Orange Money'} onPress={() => {
      navigation.navigate('payment')
    }}>
    </CustomWhiteButton> 

    </View>
 
    </>
  );
};

export default ClientDashboard;