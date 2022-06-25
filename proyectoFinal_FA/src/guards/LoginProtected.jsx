import React from 'react'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import Login from '../pages/Login'


const LoginProtected = ({children}) => {

    const{authorized:user,init}=useAuthContext()

    const [location, setLocation] = useState(null)
    
    const { pathname } = useLocation()
    console.log()
    
//    if (!init) return <p>...loading</p>

    if (!user){
        if (pathname !== location) setLocation(pathname)
        return <Login/>
    }

    if (location && pathname !== location) {
        setLocation(null)
        return <Navigate to={location} replace />
      }
    
      return <>{children}</>

}

export default LoginProtected