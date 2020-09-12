
import React from 'react';
import { Katex } from './react-katex';
import { numOfCombinations, numOfTuples, numOfPermutations, numOfMultisets } from 'combinatorics';


function combinationsFormula(m, n, c) {
  return `\\binom{${m}}{${n}} = \\frac{${m}!}{(${m} - ${n})!\\,${n}!}` + (c === undefined ? '' : ` = ${c}`);
}
function tuplesFormula(m, n, c) {
  return `{${m}}^{${n}}` + (c === undefined ? '' : ` = ${c}`);
}
function permutationsFormula(m, n, c) {
  return `V(${m}, ${n}) = \\frac{${m}!}{(${m} - ${n})!}` + (c === undefined ? '' : ` = ${c}`);
}
function multisetsFormula(m, n, c) {
  return `\\left(\\!\\!{${m}\\choose ${n}}\\!\\!\\right) = \\binom{${m} + ${n} - 1}{${n}}` + (c === undefined ? '' : ` = ${c}`);
}
function fullPermutationsFormula(m, n, c) {
  return `P(${m}) = ${m}!` + (c === undefined ? '' : ` = ${c}`);
}


// props
//   m ~ setSize
//   n ~ subsetSize
//   totalNum
function Formula(props) {
  let { m, n, totalNum, formula } = props;

  return (
    <div className="formula">
      <div className="formula-inner">
        <h2><Katex>{ formula('m', 'n') }</Katex></h2>
        <h2><Katex>{ formula(m, n, totalNum) }</Katex></h2>
      </div>
      <div></div>
    </div>
  );
}

export function CombinationsFormula({ m, n }) {
  return <Formula m={m} n={n} totalNum={ numOfCombinations(m, n) } formula={ combinationsFormula }  />
}
export function TuplesFormula({ m, n }) {
  return <Formula m={m} n={n} totalNum={ numOfTuples(m, n) }formula={ tuplesFormula } />
}
export function PermutationsFormula({ m, n }) {
  return <Formula m={m} n={n} totalNum={ numOfPermutations(m, n) }formula={ permutationsFormula } />
}
export function MultisetsFormula({ m, n }) {
  return <Formula m={m} n={n} totalNum={ numOfMultisets(m, n) }formula={ multisetsFormula } />
}
export function FullPermutationsFormula({ m }) {
  return <Formula m={m} n={m} totalNum={ numOfPermutations(m, m) } formula={ fullPermutationsFormula } />
}

