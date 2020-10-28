import React from "react";
import airbnb from "./icons/logo.svg";
import search from "./icons/search.svg";
import "./css/index.css";

function Header() {
  return (
    <header className="headings">
      <h1 className="header__logo">
        <img src={airbnb} />
      </h1>
      <div className="heading__buttons--decoration">
        <button className="first__button">Helsinki, Finland</button>
        <button className="second__button">Add guest</button>
        <button className="last__button">
          <img src={search} />
        </button>
      </div>
    </header>
  );
}

export default Header;