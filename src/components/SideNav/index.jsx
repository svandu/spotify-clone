import React from "react";

//svg
//we willl work on this later by using props

//styles
import "./sidenav.css";

function SideNav() {
  return (
    <div className="side-nav-conatiner">
      <h1 className="logo">
        <svg
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18V5l12-2v13"></path>
          <path d="M6 15a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
          <path d="M18 13a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
        </svg>
        Spotify
      </h1>
      <ul className="side-nav-links">
        <li>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <path d="M9 22V12h6v10"></path>
          </svg>
          Home
        </li>
        <li>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          Search
        </li>
        <li>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          Your Library
        </li>
      </ul>
      <ul className="side-nav-controller">
        <li>Create Playlist</li>
        <li>Liked Songs</li>
      </ul>
    </div>
  );
}

export default SideNav;
