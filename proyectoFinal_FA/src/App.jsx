
import { useEffect, useState } from 'react'
import './App.css'
import Product from './components/Product'
import getData from './hooks/getData'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import About from './pages/About'


function App() {
 
  


  return (
    <>
   <Routes>
     <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
     </Route>

   </Routes>
   </>
  )
}

export default App
