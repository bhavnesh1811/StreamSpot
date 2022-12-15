import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const initState={
        isAuth:false,
        token:null,
        
    }

    const[authState,setAuthState] = useState(initState);


    const loginUser=(tokenNo)=>{
        setAuthState({...authState,isAuth:true,token:tokenNo})
    }

    const logOutUser=()=>{
        setAuthState({...authState,initState})
    }
  return (
    <AuthContext.Provider value={{authState,loginUser,logOutUser}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;