import React, { createContext, useContext, useReducer, useState } from 'react'


import Reducer from './Reducer';

const initialState = {

  isLoading:false,
  showAlert:false,
  alertText:'',
  alertType:''

}

 const AppContext = createContext();


const AppProvider = ({children}) => {


  const [state,dispatch]=useReducer(Reducer,initialState)

   
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>

  )
}

const UseAppContext =()=>{
  
  return useContext(AppContext)

}

export  {AppProvider, initialState ,UseAppContext}
