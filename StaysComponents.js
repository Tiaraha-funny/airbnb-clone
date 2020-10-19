import React, { useState } from "react";
import stays from "./stays.json";

function StaysComponent() {
  const newData = stays.map((data) => {
    return (
      <article key={data.id}>
        <h1>{data.city}</h1>
        <img src={data.photo} alt="first photo" />
      </article>
    );
  });
  return (
    <div>
      <h1>Stays</h1>
    </div>
  );
}

export default StaysComponent;
