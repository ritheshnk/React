import React from "react";
import ReactDOM from "react-dom";

const custom_style={
  color:"blue",
  border:"5px solid black",
  fontSize:"30px"
}

const custom={
  color:"purple",
  fontSize:"20px",
  border:"10px solid black"
}


ReactDOM.render(
  <div>
  <h1 style={{ color: "red", textDecoration: "underline" }}> Hello World</h1>,
  <p style={custom_style}> hello hello hello hello hello hello</p>
  <p style={custom}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
  </div>,
  document.getElementById("root")
);
