import React from "react";
import ContainerHeroSection from "../ContainerHeroSection";
import MainNav from "../ui/MainNav";

//styles
import "./maincontainer.css";

function MainContainer() {
  return (
    <div className="main-container">
        <MainNav />
        <ContainerHeroSection />
    </div>
  );
}

export default MainContainer;
