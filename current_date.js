import React from "react";
import ReactDOM from "react-dom";

const name = "Rithesh";
const today= new Date();

ReactDOM.render(
  <div>
    <p> created by {name}</p>
    <p> copyright {today.getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
 
