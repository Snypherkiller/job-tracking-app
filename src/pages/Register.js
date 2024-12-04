import React, { useState } from 'react'
import Logo from '../Component/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../Component/FormRow'
import Alert from '../Component/Alert'


const initialState = {

    name:'',
    email:'',
    password:'',
    ismember:true,
    showAlert:true
}

const Register = () => {
    const [values,setValues]=useState(initialState)

    const handleChange =(e)=>{
        console.log(e.target)
    }
    const onSubmit = (e) => {
    
        e.preventDefault()
        console.log(e.target)

    }


  return (
    <Wrapper className='full-page'>
      <form className='form'> 
        <Logo/>
        <h3>Login</h3>
        {values.showAlert && <Alert/>}
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>
        <FormRow type='text' name='email' value={values.email} handleChange={handleChange}/>
        <FormRow type='text' name='password' value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>Submit</button>


      </form>
    </Wrapper>
  )
}

export default Register
