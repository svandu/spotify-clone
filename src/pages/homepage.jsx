import React from "react"

//styles
import "../assets/page-style/homepage.css";

//components
import SideNav from "../components/SideNav";
import AuthFooter from "../components/AuthFooter";
import MainContainer from "../components/MainContainer";

function Homepage() {
  return (
    <div className="root-container">
      <div className="home-main-container">
        <SideNav />
        <MainContainer />
      </div>
      <div className="footer">
        <AuthFooter />
      </div>
    </div>
  );
}

export default Homepage;
