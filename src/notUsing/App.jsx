import { Suspense, useEffect} from 'react'
import '../styles/App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useAuthContext } from '../context/AuthContext'


function App() {
/*
  const{authorized}=useAuthContext()
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(`auth:${authorized}`)
    if(!authorized){
      navigate('/login',{replace:true})
    }
  },[authorized])
  */
 
  return (
    <>
    <NavBar/>
    <Suspense fallback={<p>...Loading</p>}>
      <Outlet/>
    </Suspense>
   </>
  )
}

export default App
