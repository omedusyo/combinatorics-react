
// requires katex (window.katex)
import React from 'react';

export function Katex(props) {
  let s = props.children;
  return (
    <span dangerouslySetInnerHTML={ {__html: katex.renderToString(s)} } />
  );
}

