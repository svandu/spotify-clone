import React from "react";

//styles
import './AuthFooter.css'

function AuthFooter() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>preview of spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional adds. No
          credits card needed.
        </p>
      </div>
      <button className="footer-btn">
        <span>Sign up free</span>
      </button>
    </div>
  );
}

export default AuthFooter;
