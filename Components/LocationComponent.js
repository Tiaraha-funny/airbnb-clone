import React from "react";

function LocationComponent() {
  const handleClick = () => {
    console.log("I am clicked");
  }
  return <div handleClick={handleClick} >Modal Location</div>;
}

export default LocationComponent;
