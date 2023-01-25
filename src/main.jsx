import React from 'react'
import ReactDOM from 'react-dom/client'
// import HomePage from './pages/homepage'
import './assets/styles/main.css'
import RootPage from './pages/RootPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootPage />
    {/* <HomePage /> */}
  </React.StrictMode>,
)