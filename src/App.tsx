import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Tuner from "./components/Tuner";

function App() {
  return (
    <div className="wrapper">
      <Tuner />
      <Counter />
    </div>
  );
}

export default App;
