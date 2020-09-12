
import React from "react";
import ReactDOM from "react-dom";

import { Katex } from "./react-katex";

import { CombinationsFormula, TuplesFormula, PermutationsFormula, MultisetsFormula, FullPermutationsFormula } from "./react-combinatorics-formulas";

import {
  combinations,
} from "combinatorics";

const appDOM = document.getElementById("combinatorics-app");

function App(props) {
  return (
    <div>
      Hello, World!
      <CombinationsFormula m={10} n={5} />
      <TuplesFormula m={10} n={5} />
      <PermutationsFormula m={10} n={5} />
      <MultisetsFormula m={10} n={5} />
      <FullPermutationsFormula m={10} />
    </div>
  );
}

ReactDOM.render(<App />, appDOM);

