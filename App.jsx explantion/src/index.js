import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Greet from "./greeting";

ReactDOM.render(
  <div>
    <h1>
      <Greet />
    </h1>
    <h1>
      {" "}
      <App />
    </h1>
  </div>,
  document.getElementById("root")
);
