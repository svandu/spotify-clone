import React from 'react'

function SideNav() {
  return (
    <div className="side-nav-conatiner">
        <h1 className="logo">Spotify</h1>
        <ul className="side-nav-links">
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
        </ul>
        <ul className="side-nav-controller">
            <li>Create Playlist</li>
            <li>Liked Songs</li>
        </ul>
    </div>
  )
}

export default SideNav