import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator()

export default function SignupStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}