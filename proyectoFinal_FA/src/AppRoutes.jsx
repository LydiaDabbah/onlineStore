
import { useEffect, useState } from 'react'
import './styles/App.css'
import Product from './components/Product'
import getData from './hooks/getData'
import { Routes,Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products'
import Login from './pages/Login'
import App from './pages/App'
import Search from './pages/Search'


function AppRoutes() {
 
  return (
    <>

   <Routes>
   <Route path='/' element={<App/>}>
        <Route index element={<Products/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Route>
     <Route path='/Login' element={<Login/>}></Route>

   </Routes>
   </>
  )
}

export  default AppRoutes
