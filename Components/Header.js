import React, { useState } from "react";
import airbnb from "./icons/logo.svg";
import search from "./icons/search.svg";
import "./css/index.css";
import ModalComponent from "./ModalComponent";

function Header() {

  const [on, setOn] = useState(false);

  const modalOn = () => { setOn(true)};

  const modalOff = () => {setOn(false)};

  return (
    <header className="headings">
      <h1 className="header__logo">
        <img src={airbnb} />
      </h1>
      <div className="heading__buttons--decoration">
        <button className="first__button" onClick={modalOn}>
          Helsinki, Finland
        </button>
        <button className="second__button" onClick={modalOn}>Add guest</button>
        <button className="last__button">
          <img src={search} />
        </button>
      </div>

      <ModalComponent 
      modalOn={modalOn}
      modalOff= {modalOff}
      on={on}
      />
    </header>
  );
}

export default Header;
