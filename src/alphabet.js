
import React from 'react';

function range(a, b) {
  let xs = [];
  for (let i = a; i < b; i++) {
    xs.push(i);
  }
  return xs;
}


// Watch out for alphabet length.
export const alphabets = {
  ABC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  abc: 'abcdefghijklmnopqrstuvwxyz',
  num: range(1, 20 + 1).map((n) => {
    const s = n.toString();
    return s.length > 1 ? s : ' ' + s;
  })
};


// props
//   handleSelection
export function AlphabetSelection(props){
  return (
    <select className="alphabet" name="" onChange={props.handleSelection}>
      <option value="abc">abc...</option>
      <option value="ABC">ABC...</option>
      <option value="num">123...</option>
    </select>
  );
}

