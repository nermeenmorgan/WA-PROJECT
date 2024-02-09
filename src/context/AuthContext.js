import * as React from 'react';
import { createContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function saveUserCredentials(email, password) {
    try {
      // Save user credentials securely
      await SecureStore.setItemAsync('email', email);
      await SecureStore.setItemAsync('password', password);

      // Set the user in the state
      setUser({ email });
    } catch (error) {
      console.error('Error saving user credentials:', error);
    }
  }

  async function getUserCredentials() {
    try {
      // Retrieve user credentials securely
      const email = await SecureStore.getItemAsync('email');
      const password = await SecureStore.getItemAsync('password');

      // If both email and password exist, set the user in the state
      if (email && password) {
        setUser({ email });
      }
    } catch (error) {
      console.error('Error getting user credentials:', error);
    }
  }

  async function clearUserCredentials() {
    try {
      // Clear user credentials
      await SecureStore.deleteItemAsync('email');
      await SecureStore.deleteItemAsync('password');

      // Clear user from the state
      setUser(null);
    } catch (error) {
      console.error('Error clearing user credentials:', error);
    }
  }

  const contextValues = {
    user,
    saveUserCredentials,
    getUserCredentials,
    clearUserCredentials,
    // Add other values or functions you want to expose
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}
