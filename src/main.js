
import React from "react";
import ReactDOM from "react-dom";

import {
  combinations,
} from "combinatorics";

console.log(Array.from(combinations([1,2,3,4,5], 2)));

const appDOM = document.getElementById("combinatorics-app");

function App(props) {
  return (
    <div>Hello, World!</div>
  );
}

ReactDOM.render(<App />, appDOM);

