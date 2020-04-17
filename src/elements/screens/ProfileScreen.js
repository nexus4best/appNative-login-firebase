import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Firebase from '../../database/Firebase'
import AuthContext from '../../context/AuthContext'

const ProfileScreen = () => {
    const user = useContext(AuthContext)
    async function Logout() {
        try {
            await Firebase.auth().signOut()
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <Text>Name : {user.displayName}</Text>
            <Text>Email : {user.email}</Text>
            <Text>UID:  {user.uid}</Text>
            <Text>createdAt : {user.metadata.creationTime}</Text>
            <Text>lastLoginAt:  {user.metadata.lastSignInTime}</Text>
            <View style={styles.button}>
                <Button 
                    title="Logout" 
                    onPress={Logout} 
                />
            </View>                
        </View>
    )
    
}

export default ProfileScreen

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
