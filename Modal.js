import React from "react";
import "./index.css";
import StaysComponent from "./StaysComponents";

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="form">
          <StaysComponent />
        </div>
      </section>
    </div>
  );
};

export default Modal;
