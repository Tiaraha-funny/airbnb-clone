import React from "react";
import Modal from "./Modal";

const modals = document.createElement("div.modal");
document.body.appendChild(modals);

class FormComponents extends React.Component {
  state = {
    show: false,
    class: "",
    value: "",
  };

  showModal = (e) => {
    e.preventDefault();
    console.log("Open modal");
    this.setState({ show: true, class: "open" });
  };

  hideModal = (e) => {
    e.preventDefault();
    console.log("close modal");
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div>
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
              value={this.location}
              id={location.city}
              onChange={this.onChange}
            >
              Location
              <option value="Helsinki">Helsinki</option>
              <option value="Turku">Turku</option>
              <option value="Vaasa">Vaasa</option>
              <option value="Oulu">Oulu</option>
            </select>
            )
            <input
              className="btn"
              type="text"
              placeholder="Helsinki, Finland"
              onChange={this.handleChange}
              onClick={this.filterLists}
              placeholder="Add guests"
            />
          </div>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <header className="modals-heading">
            <h4>Edit your search</h4>
            <button className="closeBtn" onClick={this.hideModal}>
              X
            </button>
          </header>
        </Modal>
      </div>
    );
  }
}

export default FormComponents;
