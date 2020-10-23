import React from "react";
import vector from "./icons/vector.svg";

function DropDownSelection(props) {
  const { dropSelect, closeSelect } = props;

  const showAndHideClassName = dropSelect
    ? "dropDown display-block"
    : "dropdown display-none";

  return (
    <div className={showAndHideClassName}>
      <div className="main-drop" onMouseLeave={closeSelect}>
        <span value="Helsinki">
          <img src={vector} /> Helsinki
        </span>
        <span value="Turku">
          <img src={vector} /> Turku
        </span>
        <span value="Vaasa">
          <img src={vector} /> Vaasa
        </span>
        <span value="Oulu">
          <img src={vector} /> Oulu
        </span>
      </div>
    </div>
  );
}
export default DropDownSelection;