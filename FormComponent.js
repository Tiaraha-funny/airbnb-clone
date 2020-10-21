import React from "react";
import stays from "./stays.json";
import Modal from "./Modal";

const modals = document.createElement("div.modal");
document.body.appendChild(modals);

class FormComponents extends React.Component {
  state = {
    show: false,
    class: "",
    value: "",
    sourceData: [],
    filterData: stays
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

  handleChange = (e) => {
    this.setState({
      sourceData: stays,
    });
  };

  filterLists = (e) => {
    const updatedList = this.state.sourceData.filter((item) => {
      return (
        item.city.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filterData: updatedList });
  };

  render() {
    const searchBox = (
      <input
        className="btn"
        type="text"
        placeholder="Helsinki, Finland"
        onChange={this.handleChange}
        onClick={this.filterLists}
      />
    );
    const selectBox = this.state.filterData.map((location) => (
      <select
        key={location.title}
        className="btn"
        name={location.city}
        id={location.country}
        onChange={this.handleChange}
        onClick={this.filterLists}
      >
        Location
        <option value={location.country}>Helsinki in Finland</option>
        <option value={location.country}>Turku in Finland</option>
        <option value={location.country}>Vaasa in Finland</option>
        <option value={location.country}>Oulu in Finland</option>
      </select>
    ));

    return (
      <div>
        <form>
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
            {selectBox}
            {/* <select
                    key={location.city}
                    className="btn"
                    name={location.city}
                    id={location.country}
                    onChange={this.handleChange}
                    onClick={this.filterLists}
                  >
                    Location
                    <option value={location.country.value}>
                      Helsinki in Finland
                    </option>
                    <option value={location.country.value}>Turku in Finland</option>
                    <option value={location.country.value}>Vaasa in Finland</option>
                    <option value={location.country}>Oulu in Finland</option>
                  </select>
                ) */}
            {searchBox}
            {/* <input
              className="btn"
              type="text"
              placeholder="Helsinki, Finland"
            /> */}

            <input className="btn" type="text" placeholder="Add guests" />
            <button
              className="btn"
              onClick={this.showModal}
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
          </div>
        </form>

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
