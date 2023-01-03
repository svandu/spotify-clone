import React, { useEffect, useState } from "react";
import ContainerCards from "../ContainerCards";

//styles
import "./containerherosection.css";

function ContainerHeroSection(props) {
  const songs = [
    {
      field: "focus",
      songlist: [
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
      ],
    },

    {
      field: "spotify playlist",
      songlist: [
        {
          name: "Today's Top Hits",
          para: "Taylor Swift is on top of the Hotterst 50!",
          img: "./public/assets/img/2ndimage1.png",
        },
        {
          name: "Peaceful Piano",
          para: "Music by Metro Boomin, Lil Durk and Moneybagg Yo.",
          img: "./public/assets/img/2ndimage2.png",
        },
        {
          name: "All Out 2010s",
          para: "The biggest songs of the 2010s",
          img: "./public/assets/img/2ndimage3.png",
        },
        {
          name: "Rock Classics",
          para: "Rock legends & epic songs that continue to inspire generation",
          img: "./public/assets/img/2ndimage4.png",
        },
        {
          name: "Chill Hits",
          para: "Kick back to the best new and recent chill hits.",
          img: "./public/assets/img/2ndimage5.png",
        },
      ],
    },
  ];

  return (
    <div className="hero-main-container">
      {songs.map((singleSongData, i) => (
        <ContainerCards song={singleSongData} key={i} />
      ))}
      <hr></hr>
    </div>
  );
}

export default ContainerHeroSection;
