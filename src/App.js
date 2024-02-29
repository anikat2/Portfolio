import React, { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div class = "flower1">
        <div className="petal-top"></div>
        <div className="petal-middle" style={{ transform: show ? 'rotate(135deg)' : 'none',  marginTop: '-10%'}}></div>
        <div className="petal-bottom" style={{ transform: show ? 'rotate(115deg)' : 'none',  marginTop: '-10%'}}></div>
      </div>
    
    </div>
  );
}

export default App;
