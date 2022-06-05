
import { useEffect, useState } from 'react'
import './styles/App.css'
import Product from './components/Product'
import getData from './hooks/getData'
import { Routes,Route } from 'react-router-dom'
import NavBar from './pages/NavBar'
import About from './pages/About'
import Products from './pages/Products'


function App() {
 
  


  return (
    <>
   <Routes>
     <Route path='/' element={<NavBar/>}>
        <Route index element={<Products/>}></Route>
        <Route path='/home' element={<Products/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
     </Route>

   </Routes>
   </>
  )
}

export default App
