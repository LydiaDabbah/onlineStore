import React from 'react'
import '../styles/loginStyle.css'

const Login = () => {
  return (
 <div className='container mt-5 ' style={{width:'450px', display: 'grid',
 gap: '2rem'}}>
   <form  
   style={{
     display: 'grid',
     gap: '1.5rem',
    
   }}
   
 >
   <div className='text-center'>
     <h3 className='m-0'>Login</h3>
    
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