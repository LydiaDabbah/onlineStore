import { Suspense} from 'react'
import '../styles/App.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'


function App() {
  
  
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
