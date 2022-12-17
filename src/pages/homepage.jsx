import React from 'react'

//styles
import '../assets/page-style/homepage.css'

//components
import SideNav from '../components/SideNav'
import AuthFooter from '../components/AuthFooter';
import MainContainer from '../components/MainContainer';

function Homepage() {
  return (
    <div>
      <div className="main-container">
        <SideNav />
        <MainContainer />
      </div>
      <AuthFooter />
    </div>
  )
}

export default Homepage;