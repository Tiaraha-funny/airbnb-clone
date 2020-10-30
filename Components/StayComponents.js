import React, { useState } from "react";
import stays from "./stays.json";
import star from "./icons/star.svg";
import "./css/index.css";

function StayComponents() {

  const filterStays = stays.filter((location) => location.city.toLowerCase().includes(stays.toLowerCase()));

  if(type === "checkbox") {
    filterStays();
  }

  return (
    <section>
      <header className="main__heading">
        <h1>Stay in Filand</h1>
        <p>12+ stays</p>
      </header>
      {stays.map((stay) => {
        return (
          <article className="content" key={stay.title}>
            <img src={stay.photo} alt={stay.title} />
            <div className="main__content">
            <div>{stay.type}</div>
            <div><img className="star" src={star} /> {stay.rating}</div>
            </div>
            <div>{stay.title}</div>
          </article>
        );
      })}
    </section>
  );
}

export default StayComponents;
