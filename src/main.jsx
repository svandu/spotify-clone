import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import HomePage from './pages/homepage'
import './assets/styles/main.css'
// import RootPage from './pages/RootPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RootPage /> */}
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
)