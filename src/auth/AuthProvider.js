import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logIn = (user) => {
        setUser(user)
        setIsLoggedIn(true)
        localStorage.setItem('loginUser', JSON.stringify(user))
        localStorage.setItem('loginStatus', JSON.stringify(true))
    }
    const logOut = () => {
        setUser(null)
        setIsLoggedIn(false)
        localStorage.setItem('loginUser', JSON.stringify(''))
        localStorage.setItem('loginStatus', JSON.stringify(false))
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}

