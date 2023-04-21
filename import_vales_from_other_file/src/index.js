import React from "react";
import ReactDOM from "react-dom";
import A, { B, C } from "./values";
import * as me from "./characters";

ReactDOM.render(
  <div>
    <ul>
      <li>{A}</li>
      <li>{B()}</li>
      {/* () cause its a function */}
      <li>{C()}</li>
    </ul>

    <ol>
      <li>{me.Name}</li>
      <li>{me.Praise}</li>
    </ol>
  </div>,
  document.getElementById("root")
);
