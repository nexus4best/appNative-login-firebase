import React, { useState, useEffect } from 'react'
import firebase from '../database/Firebase'
import HomeStack from './HomeStack'
import LoginStack from './LoginStack'
import AuthContext from '../context/AuthContext'

export default function AuthNavigator() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
    function onAuthStateChanged(result) {
        setUser(result)
        if (initializing) setInitializing(false)
    }
    useEffect(() => {
        const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
        return authSubscriber
    }, [])
    useEffect(()=>{

    }, [])
    if(initializing) {
        return null
    }
    return user ? (
        <AuthContext.Provider value={user}>
            <HomeStack />
        </AuthContext.Provider>
    ) : (
        <LoginStack />
    )
}