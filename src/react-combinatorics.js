
// TODO: in Subset
//   generalize subset.toString ... it should return a react component or something...

import React from 'react';

import './combinatorics-style.scss';
import { combinations, tuples, multisets, permutations } from 'combinatorics';


const dots  = '&#8230;'; // stands for ...
const empty = '&#8709;'; // stands for the the empty set

// props
//   subset
//
// <Subset subset=["a", "b", "c"] />
export function Subset({ subset }) {
  return (
    <span className="combination">{ subset.length > 0 ? subset.toString() : empty }</span>
  );
}

// <Plus done={true} handleClick={...} />
export function Plus({ done, handleClick }) {
  return done ? null : <button className="plus" onClick={ handleClick }>+</button>;
}

// Given an iterator xs,
//   take(xs, n)
// takes the first n elements of xs into an array ys and returns { array: ys, done: b }
//   where b is a boolean that indicate whether xs is depleted.
//
// take(xs: Iterator(a), n: Nat): { array: Array(a), 
function take(xs, n) {
  let i = 0;
  let x;
  let ys = [];
  while (i < n) {
    x = xs.next();
    if (!x.done) {
      ys.push(x.value);
      i++;
    } else {
      return { array: ys, done: true };
    }
  }
  return { array: ys, done: false };
}

// <InnerTuples subsetIterator={ combinations(["a","b","c","d","e","f","g","h"], 3) } initialNumOfSubsets={10}/>
// <InnerTuples initialNumOfSubsets={2} subsetIterator={ combinations(["a","b","c","d","e","f","g","h"], 3) } initialNumOfSubsets={10}/>
//
// props
//   subsetIterator
//   initialNumOfSubsets
//   plusStepSize
// state
//   subsets
//   done
export function InnerTuples({ subsetIterator, initialNumOfSubsets, plusStepSize=1 }) {
  const { array: subsets0, done: done0 } = take(subsetIterator, initialNumOfSubsets);
  const [{ subsets, done }, setState] = React.useState({ subsets: subsets0, done: done0 });

  function handleClick(e) {
    setState(({ subsets: currentSubsets }) => {
      const { array: newSubsets, done } = take(subsetIterator, plusStepSize);
      return { subsets: currentSubsets.concat(newSubsets), done };
    });
  }

  return (
    <div>
      { subsets.map((subset, i) => <Subset key={ i } subset={ subset } />) }
      <Plus done={ done } handleClick={ handleClick } />
    </div>
  );
}


// The most important difference from InnerTuples is that
// GeneralTuples takes a generator instead of an iterator
//
//
// <GeneralTuples
//   generator={ combinations }
//   set={ ["a","b","c","d","e","f","g","h"] }
//   n={3}
//   initialNumOfSubsets={10}
//   plusStepSize={2}
// />
//
// props
//   generator
//   set
//   n ~ subsetSize
//   initialNumOfSubsets
//   plusStepSize
// Here we wish to reinitialize generator when set or n changes;
// that's why we use key={ [set, n] }
export function GeneralTuples({ generator, set, n, initialNumOfSubsets, plusStepSize }) {
  return (
    <InnerTuples
      key={ [set, n] }
      subsetIterator={ generator(set, n) }
      initialNumOfSubsets={ initialNumOfSubsets }
      plusStepSize={ plusStepSize }
    />
  );
}

// props
//   set
//   n ~ subsetSize
//   initialNumOfSubsets
//   plusStepSize
//
// <Combinations
//   set={ ["a","b","c","d","e","f","g","h"] }
//   n={3}
//   initialNumOfSubsets={10}
//   plusStepSize={2}
// />
// etc
export function Combinations(props) {
  return <GeneralTuples generator={ combinations } { ...props } />;
}
export function Tuples(props) {
  return <GeneralTuples generator={ tuples } { ...props } />;
}
export function Permutations(props) {
  return <GeneralTuples generator={ permutations } { ...props } />;
}
export function Multisets(props) {
  return <GeneralTuples generator={ multisets } { ...props } />;
}

