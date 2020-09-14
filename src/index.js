
// TODO: connect variables with a line on a mouseover
//
// TODO: in rendering-generators/index@Subset
//   generalize subset.toString ... it should return a react component or something...
//   so that you can permute images and stuff like that
// TODO: in rendering-generators/index@Subset
//   The Plus sign should contain state that tells it how much it should move.
//       This state should be completely decoupled from rendering... i.e. unless the user refreshes the page, the number of moves a plus makes should not change when rerendering.
//       Plus sign should also
//
// TODO: Maybe when a user

import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import { CombinationsPage, TuplesPage, PermutationsPage, MultisetsPage } from "./rendering-pages";

const appDOM = document.getElementById("combinatorics-app");

function App(props) {
  return (
    <div className="container">
      <CombinationsPage />
    </div>
  );
}

ReactDOM.render(<App />, appDOM);

// import { CombinationsFormula, TuplesFormula, PermutationsFormula, MultisetsFormula, FullPermutationsFormula } from "./rendering-formulas/index";
// import { Combinations, Tuples, Permutations, Multisets } from "./rendering-generators/index";
// import { Slider } from "./rendering-slider/index";
// function Test(props) {
//   return (
//     <div>
//       Hello, World!
//       <Slider />
//       <Combinations
//         set={ ["a","b","c","d","e","f","g","h"] }
//         n={3}
//         initialNumOfSubsets={10}
//         plusStepSize={2}
//       />
//       <Tuples
//         set={ ["a","b","c","d","e","f","g","h"] }
//         n={3}
//         initialNumOfSubsets={10}
//         plusStepSize={2}
//       />
//       <Multisets
//         set={ ["a","b","c","d","e","f","g","h"] }
//         n={3}
//         initialNumOfSubsets={10}
//         plusStepSize={2}
//       />
//       <Permutations
//         set={ ["a","b","c","d","e","f","g","h"] }
//         n={3}
//         initialNumOfSubsets={10}
//         plusStepSize={2}
//       />
//       <CombinationsFormula m={10} n={5} />
//       <TuplesFormula m={10} n={5} />
//       <PermutationsFormula m={10} n={5} />
//       <MultisetsFormula m={10} n={5} />
//       <FullPermutationsFormula m={10} />
//     </div>
//   );
// }
