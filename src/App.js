import React, { useRef } from 'react';
import './App.css';

function App() {
  const reference = useRef()
  return (
    <div className="App">
      <input type='text'
        ref={reference}></input>&nbsp;
      <button onClick={() => reference.current.focus()}> +</button >
    </div >
  );
}

export default App;
