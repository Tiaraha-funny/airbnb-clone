import React, { useState } from "react";
import stays from "./stays.json";
import star from "./icons/star.svg";
import "./css/index.css";

function StayComponents() {

  const [ filter, setFilter ] = useState([]);

  if(type === "checkbox") {
    filterStays();
  }

    const handleLocation = (e) => {
    setLocation(e.target.value);
    setData(
      stayData.filter((data) => {
        return data.city.toLowerCase() === e.target.value.toLowerCase();
      })
    );
  };

  const handleGest = (e) => {
    setGest(e.target.value);
    setData(
      stayData.filter((data) => {
        return data.maxGuests.toString() === e.target.value;
      })
    );
  };
  
  const handleCheckFilter = e => {

    const handleLocation = (e) => {
    setLocation(e.target.value);
    setData(
      stayData.filter((data) => {
        return data.city.toLowerCase() === e.target.value.toLowerCase();
      })
    );
  };

  const handleGest = (e) => {
    setGest(e.target.value);
    setData(
      stayData.filter((data) => {
        return data.maxGuests.toString() === e.target.value;
      })
    );
  };
  
  setFilter(e.target.value);
  
    const handleLocation = (e) => {
    setLocation(e.target.value);
    setData(
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
          ? data.map((location) => <Place key={location.title} {...location} />)
          : stayData.map((gest) => <Place key={gest.title} {...gest} />)}
      </div>
    </section>
  );
}

export default StayComponents;
