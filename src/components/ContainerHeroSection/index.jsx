import React from "react";

//styles
import "./containerherosection.css";

function ContainerHeroSection(props) {
  return (
    <div className="hero-main-container">
      <div className="focus-sec">
        <span>Focus</span>
        {song_details.map((songs,i) => {
          return (
            <div className="focus-sec-card" key={i}>
              <div className="focus-overlay-div">
                <svg
                  width="46"
                  height="46"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.505 10.186-5.365 3.24a.506.506 0 0 1-.765-.435V8.76a.505.505 0 0 1 .765-.437l5.365 3.241a.51.51 0 0 1 0 .872Z"></path>
                </svg>
              </div>
              <img
                src="../../../public/assets/img/image2.png"
                alt="image1"
                className="card-image"
              ></img>
              <span className="card-topic">{songs.name}</span>
              <p className="card-para">
                {songs.para}
              </p>
            </div>
          );
        })}
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
              <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.505 10.186-5.365 3.24a.506.506 0 0 1-.765-.435V8.76a.505.505 0 0 1 .765-.437l5.365 3.241a.51.51 0 0 1 0 .872Z"></path>
            </svg>
          </div>
          <img
            src="../../../public/assets/img/image3.png"
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
