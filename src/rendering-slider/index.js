
import React from 'react';
import './style.scss';

// // TODO... add state...
// export function Slider(props) {
//   const h = 40;
//   return (
//     <div className="slider" style={{ height: `${h}px` }}>
//       <div className="slider-inner">
//         <div className="slider-button" ></div>
//       </div>
//     </div>
//   )
// }
export function Slider({ max, handleInput, defaultValue, children }) {
  return (
    <div>
      { children }
      <input
        onChange={ handleInput }
        min="0" max={ max } defaultValue={ defaultValue }
        type="range"
      />
      <div className="range-maxValue">{ max }</div>
    </div>
  );
}


