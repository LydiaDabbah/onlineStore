import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'

//context
import {DataProvider } from './context/dataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <DataProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
)
