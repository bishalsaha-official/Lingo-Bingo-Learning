import { createContext } from "react";

export const AuthContext = createContext()

const AuthProviders = ({children}) => {

    // Create User

    // Login User

    // LogOut user

    // Observer
    
    const authInfo = {name: 'bishal'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;