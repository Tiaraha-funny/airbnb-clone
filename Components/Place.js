import React from "react";

function Place() {
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
}

export default Place;