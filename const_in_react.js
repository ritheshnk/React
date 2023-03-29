import React from "react";
import ReactDOM from "react-dom";

const name = "Rithesh";
const lname=" NK"
const lucky_num = 6;

ReactDOM.render(
  <div>
    <h1> hello {name + lname}!</h1>
    <p> Your lcuky number is {lucky_num}</p>
    <p> sum of 10 and 30 is {10 + 30}</p>
    <p> generate a random nu mber {Math.round(Math.random() * 100)}</p>
    <p> generate a random number {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
