import React, { useState, useEffect } from 'react'
import Firebase from '../../database/Firebase'
import AuthContext from '../../context/AuthContext'
import HomeStack from '../stack/HomeStack'
import LoginStack from '../stack/LoginStack'

const AuthStack = () => {

    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
    const onAuthStateChanged = result => {
        setUser(result)
        if (initializing) setInitializing(false)
    }
    useEffect(() => {
        const authSubscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged)
        return authSubscriber
    }, [])
    // if(initializing) {
    //     return null
    // }    

    return user ? (
        <AuthContext.Provider value={user}>
            <HomeStack />
        </AuthContext.Provider>
    ) : (
        <LoginStack />
    )

    //return <LoginStack />

}

export default AuthStack
