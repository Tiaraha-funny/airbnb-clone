import React from "react";
import InputModalComponent from "./InputModalComponent.js";

const Modal = (props) => {
  const { show, closeModal } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          <p>Edit your search</p>
          <button onClick={closeModal}>X</button>
        </div>
        <InputModalComponent />
      </div>
    </div>
  );
};

export default Modal;
