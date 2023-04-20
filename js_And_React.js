import React from "react";
import ReactDOM from "react-dom";

const time = new Date();
const hour = time.getHours();

const custom = {
  color: "",
  border: "10px solid black",
  fontSize: "50px",
  textAlign:"center"
};

let greeting;
if (hour > 0 && hour < 12) {
  greeting = "Good Morning";
  custom.color = "blue";
} else if (hour >= 12 && hour < 16) {
  greeting = "Good Afternoon";
  custom.color = "yellow";
} else if (hour >= 16 && hour < 19) {
  greeting = "Good evening";
  custom.color = "orange";
} else {
  greeting = "Good Night";
  custom.color = "black";
}

ReactDOM.render(<h1 style={custom}>{greeting}</h1>, document.getElementById("root"));
