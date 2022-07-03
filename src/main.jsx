import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'

//context
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
   </AuthProvider>
  </React.StrictMode>
)
