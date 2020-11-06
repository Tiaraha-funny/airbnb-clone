import React from "react";
import star from "./icons/star.svg";

function Place(props) {
    return (
        <article className="content" key={props.title}>
          <img src={props.photo} alt={props.title} />
          <div className="main__content">
          <div>{props.type}</div>
          <div><img className="star" src={star} /> {props.rating}</div>
          </div>
          <div>{props.title}</div>
        </article>
      );
}

export default Place;