
import React from "react";
import { CombinationsFormula, TuplesFormula, PermutationsFormula, MultisetsFormula, FullPermutationsFormula } from "./rendering-formulas/index";
import { numOfCombinations, numOfTuples, numOfPermutations, numOfMultisets } from 'combinatorics';
import { Combinations, Tuples, Permutations, Multisets } from "./rendering-generators/index";
import { alphabets, AlphabetSelection } from './alphabet.js';
import { Slider } from './rendering-slider/index';

// <Description m={5} n={3} totalNum={10} />
// props
//   m
//   n
//   totalNum
function Description({ m, n, totalNum }) {
  return (
    <h3>Počet možností jak vybrat <span className="displaySubsetsSize">{ n }</span> z <span className="displaySetSize">{ m }</span> bez opakování, kde nezáleží na pořadí, je <span className="combinationNum">{ totalNum }</span>.</h3>
  );
}

// Array(a), Int -> Array(a)
function take(xs, n) {
  return xs.slice(0, n);
}
// state: n, m, alphabet
export function CombinationsPage({ }) {
  const m0 = 5;
  const n0 = 3;
  const [ { m, n, alphabet }, setState ] = React.useState({ m: m0, n: n0, alphabet: alphabets.abc});

  const totalNum = numOfCombinations(m, n);
  function setAlphabet(e) {
    const v = e.target.value;
    setState(({ m, n }) => {
      const newState = {
        m, n,
        alphabet: alphabets[v],
      };
      return newState;
    });

  }
  function setSetSize(e) {
    let newM = parseInt(e.target.value);
    setState(({ n: oldN, alphabet }) => {
      let newN = Math.min(newM, oldN);
      return { m: newM, n: newN, alphabet };
    });
  }
  function setSubsetSize(e) {
    let newN = parseInt(e.target.value);
    setState(({ m, alphabet }) => {
      return { m, n: newN, alphabet }
    });
  }

  const set = take(alphabet, m);
  return (
    <div>
      <Description m={m} n={n} totalNum={totalNum} />
      <CombinationsFormula m={m} n={n} totalNum={totalNum} />
      <AlphabetSelection handleSelection={ setAlphabet }/>
      <div>
        <Slider max={20} handleInput={ setSetSize } defaultValue={m}>
          <h2>Z kolika vybírám:</h2>
        </Slider>
      </div>
      <div>
        <Slider max={m} handleInput={ setSubsetSize } defaultValue={n}>
          <h2>Kolik vybírám:</h2>
        </Slider>
      </div>
      <Combinations
        set={set}
        n={n}
        initialNumOfSubsets={50}
        plusStepSize={16}
      />
    </div>
  );
}

