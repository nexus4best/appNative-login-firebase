import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({style, ...props}) => {
    return (
        <TextInput 
            {...props}
            style={[styles.input, style]}
            placeholderTextColor={'darkgray'}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        //backgroundColor: '#e8e8e8',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '85%',
        padding: 5,
        borderRadius: 10,
        //color: 'black',
    }
})
