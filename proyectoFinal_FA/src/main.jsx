import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'


//context
import { ContextProvider } from './pages/context/filterContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
