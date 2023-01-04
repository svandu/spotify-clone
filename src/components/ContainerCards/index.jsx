import React from "react";

import "./containercards.css";

function ContainerCards(props) {

  return (
    <div className="card-conatiner">
      <span className="songs-field">{props.song.field}</span>
      <button className="focus-button">show all</button>
      <div className="item-songs">
        {props.song.songlist.map((item, i) => (
          <div className="songs-cards" key={i}>
            <div className="cards-overlay">
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
            <img src={item.img} alt="card image" className="card-image"></img>
            <span className="card-topic">{item.name}</span>
            <p className="card-para">{item.para}</p>
          </div>
        ))}
      </div>
  
    </div>
  );
}

export default ContainerCards;
