import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useAuthContext } from '../context/AuthContext'
import '../styles/loginStyle.css'

const SignUp = () => {

  const { loginAuth } =  useAuthContext()
  const [error, setError] = useState(null)

  const defaultValues = {
    email: 'danylo@gmail.com',
    password: 'gatito123'
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
 gap: '1rem'}}>
   <form 
   onSubmit={handleSubmit} 
   style={{
     display: 'grid',
     gap: '1.5rem',
    
   }}
   
 >
   <div className='text-center'>
     <h3 className='m-0'>Sign Up</h3>
    {error && <p className='m-1 text-danger'>{error}</p>}
   </div>
   <div>
     <input
       name='First name'
       placeholder='First name'
       type='text'
       className='form-control'
       autoComplete='off'
     />
   </div>
   <div>
     <input
       name='Last name'
       placeholder='Last name'
       type='text'
       className='form-control'
     />
   </div>
   <div>
     <input
       name='Email'
       placeholder='Email'
       type='text'
       className='form-control'
     />
   </div>
   <div>
     <input
       name='Password'
       placeholder='Password'
       type='password'
       className='form-control'
     />
   </div>

  
   <button type='submit' className='w-100 btn btn-dark'>Create your account</button>
 </form>
 <div className='text-center'>
    <Link to='/login'><button type='link' className='w-100 btn btn-white border'>Back to login</button></Link>
 </div>
  </div>  
  )
}

export default SignUp