import React, { useState, useEffect } from 'react';

import copyToClipboard from './utils/copyToClipboard';

import './styles.css';

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  
  useEffect( () => {
    const boxElemment = document.querySelector('.box');
    const textareaElementResult = document.getElementById('resultToCopy');

    boxElemment.style.borderTopLeftRadius = topLeft + "px";
    boxElemment.style.borderTopRightRadius = topRight + "px";
    boxElemment.style.borderBottomLeftRadius = bottomLeft + "px";
    boxElemment.style.borderBottomRightRadius = bottomRight + "px";

    textareaElementResult.value = "";
    if(topLeft !== 0)
      textareaElementResult.value += `border-top-left-radius: ${topLeft}px\n`;
    if(topRight !== 0)
      textareaElementResult.value += `border-top-right-radius: ${topRight}px\n`;
    if(bottomRight !== 0)
      textareaElementResult.value += `border-bottom-left-radius: ${bottomRight}px\n`;
    if(bottomLeft !== 0)
      textareaElementResult.value += `border-bottom-right-radius: ${bottomLeft}px\n`;

  }, [topLeft, topRight, bottomLeft, bottomRight]);


  return (
    <div className="App">
      <h1>Border-radius Previewer</h1>
      
      <div className="container">
        <div className="left">
          <input 
            type="number"
            id="topleft" 
            min="0"
            value={topLeft}
            onChange = {e => setTopLeft(Number(e.target.value))}
          />

          <input 
            type="number"
            id="bottomleft"
            min="0"
            value={bottomLeft}
            onChange = {e => setBottomLeft(Number(e.target.value))}
          />
        </div>
        
        <div className="box">
          <textarea id="resultToCopy" readOnly/>
        </div>

        <div className="right">
          <input 
            type="number"
            id="topright"
            min="0"
            value={topRight}
            onChange = {e => setTopRight(Number(e.target.value))}
          />
          <input 
            type="number"
            id="bottomrigth"
            min="0"
            value={bottomRight}
            onChange = {e => setBottomRight(Number(e.target.value))}
          />

        </div>
        
      </div>

      <button onClick={ copyToClipboard }>Copy to clipboard</button>

    </div>
  );
}

export default App;
