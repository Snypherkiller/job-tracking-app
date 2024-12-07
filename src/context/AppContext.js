import React, { createContext, useContext, useReducer, useState } from 'react'


import Reducer from './Reducer';
import { DISPLAY_ALERT } from './Action';
import { type } from '@testing-library/user-event/dist/type';
const initialState = {

  isLoading:false,
  showAlert:false,
  alertText:'',
  alertType:''

}

const AppContext = React.createContext();


const AppProvider = ({children}) => {


  const [state,dispatch]=useReducer(Reducer,initialState)

  const displayAlert =()=>{
    dispatch({type:DISPLAY_ALERT})
  }
   



  return (
    <AppContext.Provider value={{state,displayAlert}}>
      {children}
    </AppContext.Provider>

  )
}

const UseAppContext =()=>{
  
  return useContext(AppContext)

}

export  {AppProvider, initialState ,UseAppContext}
