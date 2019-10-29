import React, { useState } from "react";
import "./App.css";
import AddNames from "./components/AddNames";
import NameGenerator from "./components/NameGenerator";

function App() {
  const [names, setNames] = useState([]);
  return (
    <div className="App">
      <AddNames onRandomize={names => setNames(names)} />
      <NameGenerator names={names} />
    </div>
  );
}

export default App;
