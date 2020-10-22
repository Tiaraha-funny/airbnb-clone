import React from "react";
import FilterComponent from "./FilterComponents";
// import SearchFilter from "./filterExampleComponent";
// import FormComponents from "./FormComponent";
import "./index.css";


class App extends React.Component {
  
  render() {
    return (
      <section>

        <header className="myheading">
          <h2>Stays in Finland</h2>
          <span>12+ Stays</span>
        </header>

        <FilterComponent />
      
      </section>
    );
  }
}
export default App;
