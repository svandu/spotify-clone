import React from 'react'
import Demo from '../demo'
// import logo from '../../assets/img/'

import './rootpage.css'

function RootPage() {
  return (
    <div className='root-main-container'>
        <div className='auth-container'>
            <div className='logo-sec'>
                <img src='/assets/img/spotify.png' className='spotify-img'></img>
                <p className='logo-name'>Spotify</p>
                <Demo />
            </div>
            <div className='auth-btn'>                      
                <button className='signup-btn'>sign up</button>
                <button className='login-btn'>log in</button>
            </div>
        </div>
    </div>
  )
}

export default RootPage