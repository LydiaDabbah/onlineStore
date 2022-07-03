import { useRef } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {  useAuthContext } from '../context/AuthContext'
import '../styles/loginStyle.css'

const SignUp = () => {

  const { signUp } =  useAuthContext()
  const [error, setError] = useState(null)
  
  const yearArray=[]
    for(let i=1900;i<2020;i++){
      yearArray.push(i);
    }
  
    const monthArray=[]

    for(let i=1;i<13;i++){
     monthArray.push(i);
    }

    const dayArray=[]
    for(let i=1;i<32;i++){
     dayArray.push(i);
    }

  const refEmail=useRef()
  const refPassword=useRef()
  const refPassword2=useRef()

  const refFirstName=useRef()
  const refLastName=useRef()
  const refGender=useRef()
  const refBirthDate=useRef()
  const navigate=useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const refValues = {
      first_name:refFirstName.current.value,
      last_name:refLastName.current.value,
      birth_date:'1992-07-22',
      gender:'F',
      email: refEmail.current.value,
      password: refPassword.current.value,

    };

    try {
      await signUp(refValues);
      console.log('Registro exitoso')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  };

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
      ref={refFirstName}
       name='First name'
       placeholder='First name'
       type='text'
       className='form-control'
       autoComplete='off'
     />
   </div>
   <div>
     <input
      ref={refLastName}
       name='Last name'
       placeholder='Last name'
       type='text'
       className='form-control'
     />
   </div>
   <div>
     <select className="form-control">
     <option selected disabled hidden value="">Género</option>
     <option value={'M'}>Masculino</option>
     <option value={'F'}>Femenino</option>
     <option value={'X'}>Otro</option>
    </select>
    
   </div>

    <div className='d-flex'>
   
    <label htmlFor='dropDownBirthDate' className='w-25 my-1 text-secondary ' >Birth Date</label>
   <div id='dropDownBirthDate' className='d-flex justify-content-between w-75'>
   <select className="form-control w-25 col-4">
    <option selected disabled hidden value="">Día</option>
    {dayArray.map(day=>{
      return <option value={day}>{day}</option>
    })}
    </select>
    
    <select  className="form-control w-25 col-4 ">
    <option selected disabled hidden value="">Mes</option>
    {monthArray.map(month=>{
      return <option value={month}>{month}</option>
    })}
    </select>

   
    <select className="form-control w-25 col-4" placeholder='Añw'>
      <option selected disabled hidden value="">Año</option>
      {yearArray.map(year=>{
      return <option value={year}>{year}</option>
    })}
    </select>
   </div>
    

   </div>
   <div>
     <input
      ref={refEmail}
       name='Email'
       placeholder='Email'
       type='text'
       className='form-control'
      autoComplete='false'
     />
   </div>
   <div>
     <input
     ref={refPassword}
       name='Password'
       placeholder='Password'
       type='password'
       className='form-control'
     />
   </div>
   <div>
     <input
     ref={refPassword2}
       name='Password'
       placeholder='Confirm password'
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