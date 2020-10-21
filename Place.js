import React from "react";

function Place(props) {
  return (
    <article key={props.title} className="main-container">
      <img src={props.photo} key={props.title} />
      <aside>
        <button type={props.superHost ? "" : "hidden"} key={props.title}>
          Super Host
        </button>
        <p className="numBed">
          {props.type}.{props.beds} beds
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="red"
            width="18px"
            height="18px"
          >
            <g>
              <rect fill="none" height="24" width="24" x="0" />
              <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
            </g>
          </svg>
          {props.rating}
        </p>
      </aside>
      <h4>{props.title}</h4>
    </article>
  );
}

export default Place;
