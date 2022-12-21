import React from "react";

//styles
import "./containerherosection.css";

function ContainerHeroSection() {
  return (
    <div className="hero-main-container">
      <div className="focus-sec">
        <span>Focus</span>
        <div className="focus-sec-card">
        <div className="focus-overlay-div">
          <svg
            width="46"
            height="46"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.806 6.206a4.8 4.8 0 0 1 6.788 0L12 7.612l1.406-1.406a4.8 4.8 0 1 1 6.788 6.788L12 21.188l-8.194-8.194a4.8 4.8 0 0 1 0-6.788Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
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
      <span className="spotify-playlist">Spotify Playlist</span>
        <div className="spotify-playlist-card">
        <div className="spotify-playlist-overlay-div">
          <svg
            width="46"
            height="46"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.806 6.206a4.8 4.8 0 0 1 6.788 0L12 7.612l1.406-1.406a4.8 4.8 0 1 1 6.788 6.788L12 21.188l-8.194-8.194a4.8 4.8 0 0 1 0-6.788Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
          <img
            src="../../../public/assets/img/image1.jpg"
            alt="image2"
            className="spotify-card-image"
          ></img>
          <span className="spotify-card-topic">Today's top hits</span>
          <p className="spotify-card-para">SZA is on top of the Hottest 50!</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default ContainerHeroSection;
