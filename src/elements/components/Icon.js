import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconInput = ({style, ...props}) => {
    return (
        <Icon 
            {...props}
            style={[style]}
        />
    )
}

export default IconInput
