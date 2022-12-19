import React from "react";

//styles
import "./containerherosection.css";

function ContainerHeroSection() {
  return (
    <div className="hero-main-container">
      <div className="focus-sec">
        <span>Focus</span>
        <div className="focus-sec-card">
          <img
            src="../../../public/assets/img/image1.jpg"
            alt="image1"
            className="card-image"
          ></img>
          <span className="card-topic">Peaceful Piano</span>
          <p className="card-para">
            relax and indulge with beautiful piano pieces
          </p>
        </div>
      </div>

      <div className="spotify-playlist-sec">
        <span className="spotify-sec-card">Spotify Playlists</span>
      </div>
    </div>
  );
}

export default ContainerHeroSection;
