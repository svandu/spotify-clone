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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
        <li>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
          Create Playlist
        </li>
        <li>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          Liked Songs
        </li>
      </ul>
      <ul className="side-nav-auth">
        <li>cookies</li>
        <li>privacy</li>
      </ul>
    </div>
  );
}

export default SideNav;
