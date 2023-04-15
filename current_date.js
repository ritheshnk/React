import React from "react";
import ReactDOM from "react-dom";

const fname = "Rithesh";
const lname = "NK";
const date = new Date();

ReactDOM.render(
  <div>
    <p>
      created by {fname} {lname}
    </p>
    <p>
      {" "}
      copyright @ {date.getFullYear()} {date.getHours()}:{date.getMinutes()}:
      {date.getSeconds()}
    </p>
  </div>,
  document.getElementById("root")
);
