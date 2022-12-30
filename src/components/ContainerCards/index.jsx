import React from "react";

import "./containercards.css";

function ContainerCards(props) {
  const song_details = [
    {
      name: "Peaceful Piano",
      para: "relax and indulge with beautiful piano pieces",
      img: "./public/assets/img/1stimage1.png",
    },
    {
      name: "Deep Focus",
      para: "Keep calm and focus with ambient and post-rock music.",
      img: "./public/assets/img/1stimage2.png",
    },
    {
      name: "Instrumental Study",
      para: "Focus with soft study music in the background.",
      img: "./public/assets/img/1stimage3.png",
    },
    {
      name: "chilli lofi study beats",
      para: "The perfect study beats. Find your focus, crush your productivity.",
      img: "./public/assets/img/1stimage4.png",
    },
    {
      name: "Coding Mode",
      para: "Dedicated to all the programmers out there.",
      img: "./public/assets/img/1stimage5.png",
    },
  ];

  return (
    <div className="card-conatiner">
      {/* h1, span -> title [props.song.name] */}
      {/* div -> songslist [props.songlist.map] */}
      {/* <div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
      {/* {song_details.map((songs,i) => {
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
                src={songs.img}
                alt="image1"
                className="card-image"
              ></img>
              <span className="card-topic">{songs.name}</span>
              <p className="card-para">
                {songs.para}
              </p>
            </div>
          );
        })} */}

      <span>{props.song.field}</span>
      <div className="item-songs">
        {props.song.songlist.map((item, i) => (
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
            <img src={item.img} alt="image1" className="card-image"></img>
            <span className="card-topic">{item.name}</span>
            <p className="card-para">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerCards;
