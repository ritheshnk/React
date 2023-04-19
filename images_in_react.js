import React from "react";
import ReactDOM from "react-dom";

const fname = "Rithesh";
const x = Math.floor(Math.random() * 10);
const img = "https://picsum.photos/200/300/?blur=2";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fname}
    </h1>
    <p> my lucky Number is {x}</p>
    <p draggable="false"> my lucky Number is {x}</p>
    <p hidden="true"> my lucky Number is {x}</p>
    <a href="www.google.com">Rithesh NK </a>
    <div>
      <img
        className="imageSize"
        src="https://picsum.photos/id/237/200/300"
        alt="error"
      ></img>
      <img
        className="imageSize"
        src="https://picsum.photos/200/300?grayscale"
        alt="error"
      ></img>
      <img
        className="imageSize"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="error"
      ></img>

      <img className="imageSize" src={img + "?grayscale"}></img>
    </div>
  </div>,
  document.getElementById("root")
);
