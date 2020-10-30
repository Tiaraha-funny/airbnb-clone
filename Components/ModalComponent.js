import React from "react";
import "./css/modal.css";
import FormModalComponents from "./FormModalComponents";

function ModalComponent({ on, modalOff }) {
  const modaClassName = on ? "open" : "close";

  return (
    <div className={modaClassName}>
      <div className="modal-container">
        <div>
          <p>Edit your search</p>
          <button onClick={modalOff} className="closeBnt">X</button>
        </div>
        <FormModalComponents />
      </div>
    </div>
  );
}

export default ModalComponent;