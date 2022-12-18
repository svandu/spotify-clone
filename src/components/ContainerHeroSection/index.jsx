import React from 'react'

//styles
import './containerherosection.css'

function ContainerHeroSection() {
  return (
    <div className='hero-main-container'>
        <div className='focus-sec'>
            <span>Focus</span>
            <div className='hero-card'></div>
        </div>

        <div className='spotify-playlist-sec'>
            <span>Spotify Playlists</span>
        </div>
    </div>
  )
}

export default ContainerHeroSection