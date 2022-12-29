import React from 'react'
import ContainerHeroSection from "./ContainerHeroSection";

function ContainerCards() {
    const song_details = [
        {
            name: "Peaceful Piano",
            para: "relax and indulge with beautiful piano pieces",
            img: "..public/assets/img/1stimage1.png"
        },
        {
            name: "Deep Focus",
            para: "Keep calm and focus with ambient and post-rock music.",
            img: "..public/assets/img/1stimage2.png"
        },
        {
            name: "Instrumental Study",
            para: "Focus with soft study music in the background.",
            img: "..public/assets/img/1stimage3.png"
        },
        {
            name: "chilli lofi study beats",
            para: "The perfect study beats. Find your focus, crush your productivity.",
            img: "..public/assets/img/1stimage4.png"
        },
        {
            name: "Coding Mode",
            para: "Dedicated to all the programmers out there.",
            img: "..public/assets/img/1stimage5.png"
        },
    ];

  return (
    <div>
        <ContainerHeroSection song_details = {songs}/>
    </div>
  )
}

export default ContainerCards