import React, { useState } from 'react'
import Logo from '../Component/Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../Component/FormRow'
import Alert from '../Component/Alert'
import { UseAppContext } from '../context/AppContext'


const initialState = {

    name:'',
    email:'',
    password:'',
    ismember:true
}

const Register = () => {
    const [values,setValues]=useState(initialState)

    const {isLoading,showAlert} = UseAppContext ()


    const toggleMember =()=>
    {
        setValues({values,ismember:!values.ismember})
    }

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
        <h3>{values.ismember ? 'Login': 'Register'}</h3>
        {!values.ismember && (

            <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>


        )}
        {values.showAlert && <Alert/>}
        <FormRow type='text' name='email' value={values.email} handleChange={handleChange}/>
        <FormRow type='text' name='password' value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>Submit</button>
{values.ismember && (
    
    <p>
       Not a member yet? <button type='button' onClick={toggleMember} className='member-btn'>Register</button>
    </p>

) }

{!values.ismember && (
    <p>
        Already a membert? <button type='button' onClick={toggleMember} className='member-btn'>Login</button>
    </p>
)}

      </form>
    </Wrapper>
  )
}

export default Register
