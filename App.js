import React from "react";
import StaysComponent from "./StaysComponents";
import FormComponents from "./FormComponent";
import "./index.css";


class App extends React.Component {
  
  render() {
    return (
      <section>

      <FormComponents />

        <header className="myheading">
          <h2>Stays in Finland</h2>
          <span>12+ Stays</span>
        </header>

        <StaysComponent />
      
      </section>
    );
  }
}
export default App;
