import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const QueryContext=createContext();

const QueryContextProvider = ({children}) => {
    const [query,setQuery]=useState("");

    const handleQuery = (e)=>{
        setQuery(e.target.value);
    }

    const closeQuery=()=>{
      setQuery("");
    }
  return (
    <QueryContext.Provider value={{handleQuery,query,closeQuery}}>{children}</QueryContext.Provider>
  )
}

export default QueryContextProvider