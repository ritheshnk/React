import React from "react";
import ReactDOM from "react-dom";

const name = "Rithesh";
const today = new Date();
const image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      RITHESH NK
    </h1>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      Roman Reigns
    </h1>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Seth rollins
    </h1>
    <h1 className="multi">multiple class </h1>
    <ul className="unorder">
      <li>happy</li>
      <li>sad</li>
      <li>moody</li>
    </ul>

    <div>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        className="size"
        alt="random"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        className="size"
        alt="random"
      ></img>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        className="size"
        alt="random"
      ></img>
    </div>
    {/* another way to use img tag  */}

    <img src={image} alt="random" />
    {/* no closing tag required */}

    <img src={image + "?grayscale"} alt="random" />

    {/* to dsiplay images in grey color */}

    <p> created by {name}</p>
    <p hidden="true"> created by {name}</p>
    <p> copyright {today.getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
