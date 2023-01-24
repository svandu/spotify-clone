import React from 'react'
import './rootpage.css'

function RootPage() {
  return (
    <div className='root-main-container'>
        <div className='auth-container'>
            <div className='logo-sec'>
                <img src='./public/assets/img/spotify.png' className='spotify-img'></img>
                <p className='logo-name'>Spotify</p>
            </div>
            <div className='auth-btn'>                      
                <button className='signup-btn'>signup</button>
                <button className='login-btn'>login</button>
            </div>
        </div>
    </div>
  )
}

export default RootPage