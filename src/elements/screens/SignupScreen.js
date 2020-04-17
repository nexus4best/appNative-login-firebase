import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Firebase from '../../database/Firebase'

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSignUp = () => {
        setLoading(true)
        setTimeout(() => {
            Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res=>{
                res.user.updateProfile({
                    displayName: name
                })
                setLoading(false)
            })
            .catch(error => {
              setErrMsg(error.message)
            })    
        }, 1000);
    }
    return (
        <View style={styles.container}> 
            <View style={styles.viewEmail}>
                <Icon name='user' size={20} color={'#9E9E9E'}/>
                <TextInput 
                    style={styles.input}
                    placeholder='NickName'
                    onChangeText={(val)=> setName(val)}
                    value={name}
                />
            </View>
            <View style={styles.viewEmail}>
                <Icon name='envelope' size={20} color={'#9E9E9E'}/>
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(val)=> setEmail(val)}
                    value={email}
                />
            </View>
            <View style={styles.viewPassword}>
                <Icon name='lock' size={24} color={'#9E9E9E'}/>
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    keyboardType='numeric'
                    secureTextEntry
                    keyboardType='numeric'
                    onChangeText={(val)=> setPassword(val)}
                    value={password}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ alignSelf: 'center', marginTop: 10 }} onPress={()=>navigation.navigate('Login')}>
                <Text style={{ fontSize: 14 }}>
                    เป็นสมาชิกแล้ว <Text style={{ fontWeight: '700', color: '#E64A19'}}>
                        Sign in
                    </Text>
                </Text>
            </TouchableOpacity>

            <View style={{ marginTop: 20 }}>
                {
                    loading ? <ActivityIndicator size="small"></ActivityIndicator> : 
                    errMsg ? <Text style={styles.error}>{errMsg}</Text> : null
                }
            </View>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        borderBottomColor: '#8A8F9E',
        //borderBottomWidth: StyleSheet.hairlineWidth,
        width: 290,
        height: 50,
        fontSize: 15,
        color: '#161F3D',    
        paddingLeft: 10,
    },
    viewEmail: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 290, 
        backgroundColor: '#ECEFF1',
        paddingLeft: 15,
        borderRadius: 10,  
        marginTop: 10,        
    },
    viewPassword: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 290, 
        backgroundColor: '#ECEFF1',
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 10,        
    },
    button: {
        marginTop: 20,
        //marginHorizontal: 30,
        backgroundColor: '#C2185B',
        borderRadius: 10,
        height: 50,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorMsg: {
        //height: 70,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        //marginHorizontal: 30,
    },
    error: {
        color: '#E64A19',
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
    },
})
