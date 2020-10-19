import React from "react";
// import stays from "./stays.json";
import StaysComponent from "./StaysComponents";
import searchSvg from "./icons/search.svg";

function App() {
  return (
    <section>
      <h1>
        <form>
          <label>Windbnb</label>
          <input type="text" placeholder="Helsinki, Finland" />
          <input type="text" placeholder="Add guests" />
          <button type="submit">{searchSvg}</button>
        </form>
      </h1>
      <StaysComponent />
    </section>
  );
}
export default App;
