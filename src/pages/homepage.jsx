// import React from "react";
//styles
import "../assets/page-style/homepage.css";

//routing
import { Routes, Route } from "react-router-dom";

//components
// import SideNav from "../components/SideNav";
// import AuthFooter from "../components/AuthFooter";
// import MainContainer from "../components/MainContainer";
import LogIn from "./AuthPage/LogIn";
import SignUp from "./AuthPage/SignUp";
import RootPage from "./RootPage";

function HomePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/AuthPage/LogIn" element={<LogIn />} />
        <Route path="/AuthPage/SignUp" element={<SignUp />} />
      </Routes>
    </>


    // <div className="root-container">
    //   <div className="home-main-container">
    //     <SideNav />
    //     <MainContainer />
    //   </div>
    //   <div className="footer">
    //     <AuthFooter />
    //   </div>
    // </div>
  );
}

export default HomePage;
