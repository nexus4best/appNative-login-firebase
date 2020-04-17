import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignScreen from '../screens/SignupScreen'

const Stack = createStackNavigator()

export default function LoginStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}