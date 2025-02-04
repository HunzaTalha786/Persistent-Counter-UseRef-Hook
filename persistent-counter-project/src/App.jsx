
import './App.css'
import  { useRef } from 'react';
const PersistentCounter = () => {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Counter:', countRef.current);
  };

  return (
    <div className="counter-container">
      <h1>Persistent Counter Without Re-Rendering</h1>
      <div className="counter-log">Current Count: {countRef.current}</div>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  );
};

export default PersistentCounter;
