import 'react-native-gesture-handler'
import React from 'react'
//import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as firebase from 'firebase'
import LoginScreen from './src/auth/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import AuthScreen from './src/auth/AuthScreen'

var firebaseConfig = {
  apiKey: "AIzaSyCmkGHsls-TUnjqsif9wmLmQIZNi2Eu00M",
  authDomain: "react-firebase-c0831.firebaseapp.com",
  databaseURL: "https://react-firebase-c0831.firebaseio.com",
  projectId: "react-firebase-c0831",
  storageBucket: "react-firebase-c0831.appspot.com",
  messagingSenderId: "848049847620",
  appId: "1:848049847620:web:87607bd8befa321635ab11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'white'
        }}
        >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'ระบบงานแผนก CTS' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          //options={{ title: 'ระบบงานแผนก CTS' }}
        />
        <Stack.Screen 
          name="Auth" 
          component={AuthScreen} 
          //options={{ title: 'ระบบงานแผนก CTS' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

//const styles = StyleSheet.create({})
