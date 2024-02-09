// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NativeBaseProvider } from 'native-base';
// import SignInClient from './src/screens/auth/signIn/SignInClient/SignInClient.lazy';
// import SignUpClient from './src/screens/auth/signup/SignUpClient/SignUpClient.lazy';
// import SignUpOwner from './src/screens/auth/signup/SignUpOwner/SignUpOwner.lazy';
// import SignInOwner from './src/screens/auth/signIn/SignInOwner/SignInOwner.lazy';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen.lazy';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const Stack = createStackNavigator()
// export default function App() {
//   // const [showHomePage, setShowHomePage] = useState(false);
//   // const handleOnboardingComplete = () => {
//   //   setShowHomePage(true);
    
//   // };
//   // console.log('showHomePage:', showHomePage, ); // Add this line to check the value of showHomePage


//   return (
//     // <AuthProvider>
//     <NativeBaseProvider>
//     <GestureHandlerRootView>
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//   headerShown: true,
//   headerTitle: 'Custom Header Title',
// }}>
//       <Stack.Screen name="signinclient" component={SignInClient} />
//       <Stack.Screen name="signup-client" component={SignUpClient} />
//       <Stack.Screen name="signin-owner" component={SignInOwner} />
//       <Stack.Screen name="signup-owner" component={SignUpOwner} />
//       <Stack.Screen name="home" component={HomeScreen} />
//     </Stack.Navigator>
   
//     </NavigationContainer>
//     </GestureHandlerRootView>
//     </NativeBaseProvider>
//     // </AuthProvider>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { COLORS, SIZES } from './src/constants/theme';
import CustomGreenButton from './src/components/shared/greenBtn';
import { NativeBaseProvider } from 'native-base';
import CustomWhiteButton from './src/components/shared/whitebtn';
import Router from './src/routes/router';
import { firstStep } from './src/apis/paymob';
// Some other file

// import paymobIntegration from './path/to/paymobIntegration';


const App = () => {
  // firstStep(); // Call the function
  // Example of calling firstStep in App.js
async function fetchData() {
  await firstStep();
}
fetchData();

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign-in button pressed');
  };

  return (
        <NativeBaseProvider>

    <Router/>
        </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 160,
  },
  // input: {
  //   width: '100%',
  //   height: 40,
  //   // borderColor: 'gray',
  //   shadowOpacity:9,
  //   borderWidth: 1,
  //   marginBottom: 16,
  //   paddingLeft: 8,
  // },
  input: {
    backgroundColor: 'white', 
    borderRadius:22,
// marginBottom:30,
    width: '100%',
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 8,
    elevation: 6, 
  },
});

export default App;
