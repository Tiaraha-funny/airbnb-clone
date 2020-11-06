import React, { useState } from "react";

function FormModalComponents() {
  const [location, setLocation] = useState({
    Helsinki: false,
    Turku: false,
    Oudo: false,
    Vaasa: false,
  });
  

  const handleFilter = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setLocation({ [name]: checked })
      : setLocation({ [name]: value });
  };

  console.log(location.Helsinki);

  return (
    <form onChange={handleFilter}>
      <label>Location</label>
      <br />
      <p>
        {location.Helsinki ? "Helsinki, Finland" : ""}
        {location.Turku ? "Turku, Finland" : ""}
        {location.Oudo ? "Oudo, Finland" : ""}
        {location.Vaasa ? "Vaasa, Finland" : ""}
      </p>
      
      <input type="checkbox" name="Helsinki" value={location.Helsinki} />
      Helsinki, Finland
      <br />
      <input type="checkbox" name="Turku" value={location.Turku} />
      Turku, Finland
      <br />
      <input type="checkbox" name="Oudo" value={location.Oudo} />
      Oudo, Finland
      <br />
      <input type="checkbox" name="Vaasa" value={location.Vaasa} />
      Vaasa, Finland
      <br />
    </form>
  );
}

export default FormModalComponents;
