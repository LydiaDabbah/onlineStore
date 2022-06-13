import { useState } from 'react'
import {  useAuthContext } from '../context/AuthContext'

import '../styles/loginStyle.css'

const Login = () => {

  const { loginAuth } =  useAuthContext()
  const [error, setError] = useState(null)

  const defaultValues = {
    email: 'danylo@gmail.com',
    password: 'gatito13'
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await loginAuth(defaultValues)
    } catch (error) {
      setError('Incorrect email or password')
    }
  }

  return (
 <div className='container mt-5 ' style={{width:'450px', display: 'grid',
 gap: '2rem'}}>
   <form 
   onSubmit={handleSubmit} 
   style={{
     display: 'grid',
     gap: '1.5rem',
    
   }}
   
 >
   <div className='text-center'>
     <h3 className='m-0'>Login</h3>
    {error && <p className='m-1 text-danger'>{error}</p>}
   </div>
   <div>
     <input
       name='username'
       placeholder='Username'
       type='text'
       className='form-control'
       autoComplete='off'
     />
   </div>
   <div>
     <input
       name='password'
       placeholder='Password'
       type='password'
       className='form-control'
     />
   </div>
   <button type='submit' className='w-100 btn btn-dark'>Login</button>
 </form>
 <div className='text-center'>
   <p>Don´t you have an account?</p>
 <button type='link' className='w-100 btn btn-white border'>Sign Up</button>
 </div>
  </div>  
  )
}

export default Login