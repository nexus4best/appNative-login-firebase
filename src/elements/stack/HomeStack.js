import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const StackHome = createStackNavigator()
const StackProfile = createStackNavigator()

function StackHomeScreen  () {
    return (
        <StackHome.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#096dd9',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <StackHome.Screen name="Home" component={HomeScreen} />
        </StackHome.Navigator> 
    )       
}

function StackProfileScreen  () {
    return (
        <StackProfile.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#096dd9',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <StackProfile.Screen name="Profile" component={ProfileScreen} />
        </StackProfile.Navigator> 
    )       
}

function MainTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#7cb305"
        >
            <Tab.Screen
                name="Home"
                component={StackHomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    //tabBarColor: "#096dd9",
                    //activeBackgroundColor: '#7cb305',
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="Profile"
                component={StackProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    //activeBackgroundColor: '#7cb305',
                    //tabBarColor: '#7cb305',
                    tabBarIcon: ({ color }) => (
                      <Icon name="user" color={color} size={26} />
                    ),
                  }}
            />
        </Tab.Navigator>        
    )
}

const HomeStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Home" component={MainTabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default HomeStack

