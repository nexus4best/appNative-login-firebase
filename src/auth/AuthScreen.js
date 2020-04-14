import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'

const AuthScreen = ({ navigation }) => {
    useEffect(() => {
        firebase
            .auth().onAuthStateChanged(user => {        
                navigation.navigate(user ? "Home" : "Login")
            })    
    }, [])
    return (
        <View style={styles.container}>
            <Text>โปรดรอซักครู่...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})