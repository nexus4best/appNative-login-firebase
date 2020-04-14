import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const handleLogin = () => {
      setLoading(true)
      setTimeout(() => {
          firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(setLoading(false))
          .catch(error => setErrMsg(error.message))    
      }, 3000);
  }
  return (
  <View style={styles.container}>
    {/* <Text style={styles.greeting}>Welcome to React Native</Text> */}
    <View  style={styles.errorMsg}>
      {errMsg ? <Text style={styles.error}>{errMsg}</Text>: null}
    </View>
    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none" 
            onChangeText={(val)=> setEmail(val)}
            value={email}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput 
            style={styles.input} 
            secureTextEntry
            onChangeText={(val)=> setPassword(val)}
            value={password}
        />
      </View>
    </View>

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign in</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={{ alignSelf: 'center', marginTop: 30 }}>
      <Text style={{ color: '#414959', fontSize: 14 }}>
          สมัครสมาชิก <Text style={{ fontWeight: '500', color: '#E9446A'}}>
              Sign up
          </Text>
      </Text>
    </TouchableOpacity>
    <View style={{ marginTop: 20 }}>
      {loading ? <ActivityIndicator size="large"></ActivityIndicator> : null}
    </View>
  </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ddd',
  },
  greeting: {
      marginTop: 30,
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
  },
  errorMsg: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30,
  },
  error: {
      color: 'red',
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'center',
  },
  form: {
      marginBottom: 50,
      marginHorizontal: 30,
  },
  inputTitle: {
      color: '#8A8F9E',
      fontSize: 10,
  },
  input: {
      borderBottomColor: '#8A8F9E',
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: '#161F3D',
  },
  button: {
      marginHorizontal: 30,
      backgroundColor: '#E9446A',
      borderRadius: 5,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
  }
})
