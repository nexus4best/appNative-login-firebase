import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>DetailsScreen</Text>
            <View>
                <Button 
                    title="Home" 
                    onPress={()=>navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
