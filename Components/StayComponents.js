import React, { useState } from "react";
import stays from "./stays.json";
import "./css/index.css";

function StayComponents() {

  const [ stays, setStays ] = useState([]);

  return (
    <div>
      <header className="main__heading">
        <h1>Stay in Filand</h1>
        <p>12+ stays</p>
      </header>
    </div>
  );
}

export default StayComponents;