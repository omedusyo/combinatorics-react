
import React from "react";
import ReactDOM from "react-dom";

import { CombinationsFormula, TuplesFormula, PermutationsFormula, MultisetsFormula, FullPermutationsFormula } from "./react-combinatorics-formulas";

import { Combinations, Tuples, Permutations, Multisets } from "./react-combinatorics";

const appDOM = document.getElementById("combinatorics-app");

function App(props) {
  return (
    <div>
      Hello, World!
      <Combinations
        set={ ["a","b","c","d","e","f","g","h"] }
        n={3}
        initialNumOfSubsets={10}
        plusStepSize={2}
      />
      <Tuples
        set={ ["a","b","c","d","e","f","g","h"] }
        n={3}
        initialNumOfSubsets={10}
        plusStepSize={2}
      />
      <Multisets
        set={ ["a","b","c","d","e","f","g","h"] }
        n={3}
        initialNumOfSubsets={10}
        plusStepSize={2}
      />
      <Permutations
        set={ ["a","b","c","d","e","f","g","h"] }
        n={3}
        initialNumOfSubsets={10}
        plusStepSize={2}
      />
      <CombinationsFormula m={10} n={5} />
      <TuplesFormula m={10} n={5} />
      <PermutationsFormula m={10} n={5} />
      <MultisetsFormula m={10} n={5} />
      <FullPermutationsFormula m={10} />
    </div>
  );
}

ReactDOM.render(<App />, appDOM);

