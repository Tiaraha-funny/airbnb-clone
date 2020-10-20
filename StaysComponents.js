import React from "react";
import stays from "./stays.json";
import "./index.css";

function StaysComponent() {
  return (
    <div className="container">
      {stays.map((data) => (
        <article key={data.title} className="main-container">
          <img src={data.photo} key={data.title} />
          <aside>
            <button type={data.superHost ? "" : "hidden"} key={data.title}>
              Super Host
            </button>
            <p className="numBed">
              {data.type}.{data.beds} beds
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
              {data.rating}
            </p>
          </aside>
          <h4>{data.title}</h4>
        </article>
      ))}
    </div>
  );
}

export default StaysComponent;
