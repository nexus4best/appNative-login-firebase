import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Firebase from '../../database/Firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [hidePass, setHidePass] = useState(true)
    const setPassWordVisibility = () => {
        setHidePass(!hidePass)
    }
    const handleLogin = () => {
        setLoading(true)
        setErrMsg('')
        setTimeout(() => {
            Firebase.auth().signInWithEmailAndPassword(email, password)
              .then(setLoading(false))
              .catch(error => {
                setErrMsg(error.message)
              })    
        }, 1000);
    }
    return (
        <View style={styles.container}> 
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
                    secureTextEntry={hidePass}
                    keyboardType='numeric'
                    onChangeText={(val)=> setPassword(val)}
                    value={password}
                />
                <TouchableOpacity 
                    style={{ position: 'relative', right: 65 }}
                    onPress={setPassWordVisibility}
                >
                    {hidePass ? <Icon name='eye-slash' size={20} /> : <Icon name='eye-slash' size={20} />}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ alignSelf: 'center', marginTop: 10 }} onPress={()=>navigation.navigate('Signup')}>
                <Text style={{ fontSize: 14 }}>
                    สมัครสมาชิกใหม่ <Text style={{ fontWeight: '700', color: '#E64A19'}}>
                        Sign up
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

export default LoginScreen

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
        backgroundColor: '#1976D2',
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
