import React, { useState } from 'react'
import Logo from '../Component/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'


const initialState = {

    name:'',
    email:'',
    password:'',
    ismember:true,
}

const Register = () => {
    const [values,setValues]=useState(initialState)
    

  return (
    <div>
        <Wrapper>
      Register
      <Logo/>
      </Wrapper>
    </div>
  )
}

export default Register
