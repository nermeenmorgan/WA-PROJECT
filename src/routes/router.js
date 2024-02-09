// // routes.js

// import React from 'react';
// import SignInClient from '../screens/auth/signIn/SignInClient/SignInClient';
// // routes.js

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Routes = () => {
  //   return (
    //     <NavigationContainer>
    //       <Stack.Navigator initialRouteName="SignInClient">
    //         <Stack.Screen name="SignInClient" component={SignInClient} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   );
    // };
    
    // export default Routes;
    
    
    // router.js

    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    // import SignInClient from './screens/auth/signIn/SignInClient';
    import { createStackNavigator } from '@react-navigation/stack';
import SignInClient from '../screens/auth/signIn/SignInClient/SignInClient';
import SignInOwner from '../screens/auth/signIn/SignInOwner/SignInOwner';
import SignUpOwner from '../screens/auth/signup/SignUpOwner/SignUpOwner';
import SignUpClient from '../screens/auth/signup/SignUpClient/SignUpClient';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ClientDashboard from '../screens/ClientDashboard/ClientDashboard';
import OwnerDashboard from '../screens/OwnerDashboard/OwnerDashboard';
import Onboarding from '../screens/onboarding/onboarding';
import Scan from '../screens/ClientDashboard/scan';
import Scanner from '../screens/ClientDashboard/scanner';
import PaymentComponent from '../screens/PaymentComponent';
    
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="onboarding" screenOptions={{
  headerShown: false,
}} >
        <Stack.Screen  name="onboarding" component={Onboarding} />
        <Stack.Screen  name="home" component={HomeScreen} />
        <Stack.Screen  name="SignInOwner" component={SignInOwner} />
        <Stack.Screen  name="SignInClient" component={SignInClient} />
        <Stack.Screen  name="SignUpOwner" component={SignUpOwner} />
        <Stack.Screen  name="SignUpClient" component={SignUpClient} />
        <Stack.Screen  name="ClientDashboard" component={ClientDashboard} />
        <Stack.Screen  name="OwnerDashboard" component={OwnerDashboard} />
        <Stack.Screen  name="scan" component={Scan} />
        <Stack.Screen  name="Scanner" component={Scanner} />
        <Stack.Screen  name="payment" component={PaymentComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
