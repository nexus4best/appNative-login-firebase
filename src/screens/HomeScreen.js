import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from '../database/Firebase'
//import { AuthContext } from '../stack/AuthNavigator'
import AuthContext from '../context/AuthContext'

const HomeScreen = () => {
    const user = useContext(AuthContext)
    async function logOut() {
        try {
            //console.log('AuthContext', user)
            await firebase.auth().signOut()
            console.log('Logout ok')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <Text>Email : {user.email}</Text>
            <Text>UID:  {user.uid}</Text>
            <Text>createdAt : {user.metadata.creationTime}</Text>
            <Text>lastLoginAt:  {user.metadata.lastSignInTime}</Text>
            <View style={styles.button}>
                <Button 
                    title="Logout" 
                    onPress={logOut} 
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        marginTop: 15,
    }
  })