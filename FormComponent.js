import React, { useState } from "react";
import Modal from "./Modal";

function FormComponents({ location, gest }) {
  const [show, setShow] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const closeModal = () => setShow(false);

  return (
    <div className="form">
      <label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          fill="#EB5757"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
        Windbnb
      </label>

      <div className="btns">
        <select
          key={location.title}
          className="btn"
          name={location.city}
          id={location.city}
          onChange={location}
        >
          Location
          <option value="Helsinki">Helsinki</option>
          <option value="Turku">Turku</option>
          <option value="Vaasa">Vaasa</option>
          <option value="Oulu">Oulu</option>
        </select>

        <input
          className="btn btnInp"
          type="number"
          placeholder="Helsinki, Finland"
          onChange={gest}
          placeholder="Add guests"
        />
        <button
          type="submit"
          className="btn button-default"
          style={{ backgroundColor: "white" }}
          onClick={openModal}
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
      </div>

      <Modal 
      closeModal={closeModal}
      show={show} />
    </div>
  );
}

export default FormComponents;
