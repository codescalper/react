import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0); //count is inital number which will be 0 and setCount will be the updated one

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
