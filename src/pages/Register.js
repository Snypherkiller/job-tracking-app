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
    showAlert:false
}

const Register = () => {
    const [values,setValues]=useState(initialState)


    const toggleMember =()=>
    {
        setValues({...values,ismember:!values.ismember})
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
        <h3>Register</h3>
        {values.showAlert && <Alert/>}
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>
        <FormRow type='text' name='email' value={values.email} handleChange={handleChange}/>
        <FormRow type='text' name='password' value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>Submit</button>

<p>
    <button type='button' onClick={toggleMember} className='member-btn'>Register</button>
</p>
      </form>
    </Wrapper>
  )
}

export default Register
