import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';
import { NativeBaseProvider } from 'native-base';
import SignUp from './screens/signUp/SignUp';
import SignIn from './screens/signIn/SignIn';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NativeBaseProvider>

    <NavigationContainer>

    <Stack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#112D4E',
      }
    }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
    
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
