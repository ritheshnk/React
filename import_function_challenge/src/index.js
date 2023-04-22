import React from "react";
import ReactDOM from "react-dom";
import {Add,Sub,Multi,Divi} from "./operator"

ReactDOM.render(
  <div>
    <ul>
      <li>{Add(5,6)}</li>
      <li>{Sub(10,5)}</li>
      <li>{Multi(5,5)}</li>
      <li>{Divi(9,3)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
