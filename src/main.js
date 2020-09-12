
import React from "react";
import ReactDOM from "react-dom";

import { Katex } from "./react-katex";

import {
  combinations,
} from "combinatorics";

const appDOM = document.getElementById("combinatorics-app");

function App(props) {
  return (
    <div>
      Hello, World!
      <Katex>{"1 + 1 = 2"}</Katex>
    </div>
  );
}

ReactDOM.render(<App />, appDOM);

