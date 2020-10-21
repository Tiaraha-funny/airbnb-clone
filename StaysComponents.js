import React, { useState } from "react";
import stays from "./stays.json";
import Place from "./Place";
import FormComponents from"./FormComponent";
import "./index.css";

function StaysComponent() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);

  function formData(e) {
    e.preventDefault();
    setData(stays);
  }

  let filterData = data.filter((place) => place.city == location);
  console.log(filterData);

  let mappingLocation = stays.map((data) => {
    return <Place key={data.title} {...data} />;
  });

  let storingTheMapData = filterData.map((location) => {
    return <Place key={location.title} {...location} />;
  });

  const ShowFilteredData = location === "" ? mappingLocation : storingTheMapData;

  return (
    <div>
      <form onSubmit={formData}>
        <FormComponents
          location={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#EB5757"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>

  <div className="container">{ShowFilteredData}</div>
    </div>
  );
}

export default StaysComponent;
