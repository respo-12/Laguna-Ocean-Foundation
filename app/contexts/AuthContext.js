import React, { useContext, useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider( {children} ) {
    const [error, setError] = useState("");
    const [currentUser, setCurrentUser] = useState()
    const [loading , setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
    }

    async function logout() {
        setError("");
        try{
            await signOut(FIREBASE_AUTH);
        }catch{
            setError("Failed to log out")
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
        setLoading(false)
        setCurrentUser(user)
    })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}