import React from "react";

//styles
import "./mainnav.css";

function MainNav() {
  return (
    <div className="main-conatiner-nav">
      <div className="container-btn">
        <button>
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button>
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      <div className="auth-btn">
        <button className="nav-btn">Premium</button>
        <button className="nav-btn">Support</button>
        <button className="nav-btn">Download</button>
        <button className="nav-btn">Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default MainNav;
