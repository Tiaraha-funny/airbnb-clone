import React from "react";
import Headers from "./Header";
import StayComponents from "./StayComponents";

class App extends React.Component {
  
  render() {
    return (
      <section>
        <Headers />
        <StayComponents />
      </section>
    );
  }
}

export default App;