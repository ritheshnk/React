import React from "react";
import ReactDOM from "react-dom";
import Ram from "./Heading";

const name = "Rithesh";
const lname = "NK";
const a = "Good";
const b = "morning";
const num = Math.round(Math.random() * 10);

function Heading() {
  return <h1> Narayan </h1>;
}
ReactDOM.render(
  <div>
    <Heading></Heading>
    {/* or <Heading /> */}

    <Ram />
    <h1>
      Hello {name} {lname}
    </h1>
    <h2> {a + " " + b} </h2>
    <ul>
      <li>Rithesh</li>
      <li>Happy</li>
      <li>Lucky number is {num}</li>
      <li> can also perform math operation using ccurly brackets {10 - 5}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
