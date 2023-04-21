import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const hour = today.getHours();

const text = {
  color: "",
  backgroundColor: ""
};

let greet;

if (hour >= 0 && hour < 12) {
  greet = "Good morning";
  text.color = "orange";
  text.backgroundColor = "blue";
} else if (hour >= 12 && hour < 16) {
  greet = "Good Afternoon";
  text.color = "blue";
  text.backgroundColor = "orange";
} else if (hour >= 16 && hour < 19) {
  greet = "Good Evening";
  text.color = "white";
  text.backgroundColor = "purple";
} else {
  greet = "Good Night";
  text.color = "grey";
  text.backgroundColor = "pink";
}

ReactDOM.render(<h1 style={text}>{greet}</h1>, document.getElementById("root"));
