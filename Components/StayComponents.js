import React, { useState } from "react";
import stays from "./stays.json";
import Place from "./Place";
import "./css/index.css";

const stayData = stays;

function StayComponents() {

  const [ filter, setFilter ] = useState([]);
  const [ location, setLocation ] = useState("");
  const [ gest, setGest ] = useState("");


  const handleGest = (e) => {
    setGest(e.target.value);
    setFilter(
      stayData.filter((data) => {
        return data.maxGuests.toString() === e.target.value;
      })
    );
  };
  
    const handleLocation = (e) => {
    setLocation(e.target.value);
    setFilter(
      stayData.filter((data) => {
        return data.city.toLowerCase() === e.target.value.toLowerCase();
      })
    );
  }


  return (
    <section>
      <header className="main__heading">
        <h1>Stay in Filand</h1>
        <p>12+ stays</p>
      </header>
      <div className="container">
        {gest || location
          ? filter.map((location) => <Place key={location.title} {...location} />)
          : stayData.map((gest) => <Place key={gest.title} {...gest} />)}
      </div>
    </section>
  );
}

export default StayComponents;
