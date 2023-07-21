import React from "react";
import "./App.css";
import CounterView from "./features/counter/CounterView";

const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterView></CounterView>
    </div>
  );
};

export default App;
