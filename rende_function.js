// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>hello</h1>, document.getElementById("root")); //we cannot emmbended 2 html elemets 
//ReactDOM.render(<h1>hello</h1> <p> this is a pera </p>, document.getElementById("root"));

// to add 2 elements use div

ReactDOM.render(
  <div>
    <h1> Rithesh </h1>
    <p> a web developer </p>
  </div>,
  document.getElementById("root")
);


var heading = document.createElement("h1");
heading.innerHTML = "hello world";
document.getElementById("root").appendChild(heading);
