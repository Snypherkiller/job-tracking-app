import React from 'react'
import { UseAppContext } from '../context/AppContext'

const Alert = () => {
  const {alertType,alertText}=UseAppContext()
  return (
    <div className={`alert alert-${alertType}`}>
        {alertText}      
    </div>
  )
}

export default Alert
