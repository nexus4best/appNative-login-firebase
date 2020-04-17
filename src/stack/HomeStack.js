import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'

const StackHome = createStackNavigator()
const StackDetails = createStackNavigator()

const Drawer = createDrawerNavigator()

const Tab = createMaterialBottomTabNavigator()
//const Tab = createBottomTabNavigator()

function DetailsMainScreen({ navigation }) {
    return (
        <StackDetails.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#7cb305',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <StackDetails.Screen name="Details" component={DetailsScreen} options={{
                headerLeft: () => (
                    <Icon.Button 
                        name="align-justify" size={25} color="#fff" backgroundColor="#7cb305"
                        onPress={()=> navigation.openDrawer()}
                    />
                )
            }}/>
        </StackDetails.Navigator> 
    )       
}

function HomeMainScreen({ navigation }) {
    return (
        <StackHome.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#096dd9',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}>
            <StackHome.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => (
                    <Icon.Button 
                        name="align-justify" size={25} color="#fff" backgroundColor="#096dd9"
                        onPress={()=> navigation.openDrawer()}
                    />
                )
            }}/>
        </StackHome.Navigator> 
    )       
}

function MainTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            //style={{ backgroundColor: 'red' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeMainScreen}
                options={{
                    tabBarLabel: 'หน้าหลัก',
                    tabBarColor: "#096dd9",
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="AAA"
                component={DetailsMainScreen}
                options={{
                    tabBarLabel: 'ส่วนตัว',
                    tabBarColor: '#7cb305',
                    tabBarIcon: ({ color }) => (
                      <Icon name="user" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="BBB"
                component={DetailsMainScreen}
                options={{
                    tabBarLabel: 'ตั้งค่า',
                    tabBarColor: '#08979c',
                    tabBarIcon: ({ color }) => (
                      <Icon name="cog" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsMainScreen}
                options={{
                    tabBarLabel: 'จดหมาย',
                    tabBarColor: '#c41d7f',
                    tabBarIcon: ({ color }) => (
                      <Icon name="envelope" color={color} size={26} />
                    ),
                  }}
            />
        </Tab.Navigator>        
    )
}

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
                <Drawer.Screen name="Details" component={DetailsMainScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack