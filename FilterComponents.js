import React, { useState } from "react";
import stays from "./stays.json";
import Place from "./MainPlace";
import FormComponents from "./FormComponent";
import "./index.css";

const stayData = stays;

function FilterComponent() {
  const [gest, setGest] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);

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

  return (
    <div>
      <form>
        <FormComponents
          location={location}
          location={handleLocation}
          gest={handleGest}
        />
      </form>
      
      <header className="myheading">
        <h2>Stays in Finland</h2>
        <span>12+ Stays</span>
      </header>

      <div className="container">
        {gest || location
          ? data.map((location) => <Place key={location.title} {...location} />)
          : stayData.map((gest) => <Place key={gest.title} {...gest} />)}
      </div>

    </div>
  );
}

export default FilterComponent;
