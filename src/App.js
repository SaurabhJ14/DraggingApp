import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';

const App = () => {
  const [component, setComponent] = useState([<Draggable key={0} />]);

  const addParent = () => {
    setComponent([<Draggable key={component.length}>{component}</Draggable>]);
  }

  return (
    <div className="App">
      <button className='button' onClick={addParent}>AddParent</button>
      {component}
    </div>
  );
}

export default App;
