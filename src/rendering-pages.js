
import React from "react";
import { CombinationsFormula, TuplesFormula, PermutationsFormula, MultisetsFormula, FullPermutationsFormula } from "./rendering-formulas/index";
import { numOfCombinations, numOfTuples, numOfPermutations, numOfMultisets } from 'combinatorics';
import { Combinations, Tuples, Permutations, Multisets } from "./rendering-generators/index";
import { alphabets, AlphabetSelection } from './alphabet.js';
import { Slider } from './rendering-slider/index';


// Array(a), Int -> Array(a)
function take(xs, n) {
  return xs.slice(0, n);
}


// =========== PAGES ================

// The following functions return State-Changer functions - supposing they are provided a basic setState function
function genericSetAlphabet(setState) {
  return e => {
    const v = e.target.value;
    setState(({ m, n }) => {
      const newState = {
        m, n,
        alphabet: alphabets[v],
      };
      return newState;
    });
  };
}
function genericSetM(setState) {
  return e => {
    let newM = parseInt(e.target.value);
    setState(({ n: oldN, alphabet }) => {
      let newN = Math.min(newM, oldN);
      return { m: newM, n: newN, alphabet };
    });
  };
}
function genericSetN(setState) {
  return e => {
    let newN = parseInt(e.target.value);
    setState(({ m, alphabet }) => {
      return { m, n: newN, alphabet }
    });
  };
}

// TODO: I could abstract these pages into one component, but that seems really wrong (even if it would save a lot of typing - as if that's important)

// state: n, m, alphabet
export function CombinationsPage({ }) {
  const m0 = 5;
  const n0 = 3;
  const [ { m, n, alphabet }, setState ] = React.useState({ m: m0, n: n0, alphabet: alphabets.abc});
  const totalNum = numOfCombinations(m, n);
  const set = take(alphabet, m);

  const setAlphabet = genericSetAlphabet(setState);
  const setSetSize = genericSetM(setState);
  const setSubsetSize = genericSetN(setState);

  return (
    <div>
      <h3>Počet možností jak vybrat <span className="displaySubsetsSize">{ n }</span> z <span className="displaySetSize">{ m }</span> bez opakování, kde nezáleží na pořadí, je <span className="combinationNum">{ totalNum }</span>.</h3>

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

export function TuplesPage({ }) {
  const m0 = 5;
  const n0 = 3;
  const [ { m, n, alphabet }, setState ] = React.useState({ m: m0, n: n0, alphabet: alphabets.abc});
  const totalNum = numOfTuples(m, n);
  const set = take(alphabet, m);

  const setAlphabet = genericSetAlphabet(setState);
  const setSetSize = genericSetM(setState);
  const setSubsetSize = genericSetN(setState);

  return (
    <div>
      <h3>Počet možností jak vybrat <span className="displaySubsetsSize">{ n }</span> z <span className="displaySetSize">{ m }</span> s opakováním, kde záleží na pořadí, je <span className="combinationNum">{ totalNum }</span>.</h3>

      <TuplesFormula m={m} n={n} totalNum={totalNum} />
      <AlphabetSelection handleSelection={ setAlphabet }/>
      <div>
        <Slider max={16} handleInput={ setSetSize } defaultValue={m}>
          <h2>Z kolika vybírám:</h2>
        </Slider>
      </div>
      <div>
        <Slider max={m} handleInput={ setSubsetSize } defaultValue={n}>
          <h2>Kolik vybírám:</h2>
        </Slider>
      </div>
      <Tuples
        set={set}
        n={n}
        initialNumOfSubsets={50}
        plusStepSize={16}
      />
    </div>
  );
}

export function PermutationsPage({ }) {
  const m0 = 5;
  const n0 = 3;
  const [ { m, n, alphabet }, setState ] = React.useState({ m: m0, n: n0, alphabet: alphabets.abc});
  const totalNum = numOfPermutations(m, n);
  const set = take(alphabet, m);

  const setAlphabet = genericSetAlphabet(setState);
  const setSetSize = genericSetM(setState);
  const setSubsetSize = genericSetN(setState);

  return (
    <div>
      <h3>Počet možností jak vybrat <span className="displaySubsetsSize">{ n }</span> z <span className="displaySetSize">{ m }</span> bez opakování, kde záleží na pořadí, je <span className="combinationNum">{ totalNum }</span>.</h3>

      <PermutationsFormula m={m} n={n} totalNum={totalNum} />
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
      <Permutations
        set={set}
        n={n}
        initialNumOfSubsets={50}
        plusStepSize={16}
      />
    </div>
  );
}

export function MultisetsPage({ }) {
  const m0 = 5;
  const n0 = 3;
  const [ { m, n, alphabet }, setState ] = React.useState({ m: m0, n: n0, alphabet: alphabets.abc});
  const totalNum = numOfMultisets(m, n);
  const set = take(alphabet, m);

  const setAlphabet = genericSetAlphabet(setState);
  const setSetSize = genericSetM(setState);
  const setSubsetSize = genericSetN(setState);

  return (
    <div>
      <h3>Počet možností jak vybrat <span className="displaySubsetsSize">{ n }</span> z <span className="displaySetSize">{ m }</span> s opakováním, kde nezáleží na pořadí, je <span className="combinationNum">{ totalNum }</span>.</h3>

      <MultisetsFormula m={m} n={n} totalNum={totalNum} />
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
      <Multisets
        set={set}
        n={n}
        initialNumOfSubsets={50}
        plusStepSize={16}
      />
    </div>
  );
}
