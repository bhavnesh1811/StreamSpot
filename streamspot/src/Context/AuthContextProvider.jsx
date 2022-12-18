import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const initState={
        isAuth:false,
        token:null,
        username:null,
        loading:false,
        url:null,
        
    }

    const[authState,setAuthState] = useState(initState);


    const loginUser=(tokenNo,username)=>{
        setAuthState({isAuth:true,token:tokenNo,username:username})
    }

    const logOutUser=()=>{
        setAuthState(initState)
    }

    const loadingStatus=()=>{
      setAuthState({...authState,loading:true})
    }
  return (
    <AuthContext.Provider value={{authState,loginUser,logOutUser,loadingStatus}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;