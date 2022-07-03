import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'


const AdminProtected= ({ children }) => {

  const{authorized:user}=useAuthContext()
  const [location, setLocation] = useState(null)
  const { pathname } = useLocation()


  if (window.localStorage.role!=='ADMIN'){
      if (pathname !== location) setLocation(pathname)
      return <Navigate to='/'/>

  }

  if (location && pathname !== location) {
      setLocation(null)
      return <Navigate to={location} replace />
    }
  
    return <>{children}</>
}
export default AdminProtected