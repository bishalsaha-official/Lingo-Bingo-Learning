import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    // Create User
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut user
    const logoutUser = ()=>{
        return signOut(auth)
    }

    // Observer
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        }) 
        return ()=> {
            unSubscribe()
        }
    }, [])
    
    const authInfo = {user, setUser, createUser, loginUser, logoutUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;