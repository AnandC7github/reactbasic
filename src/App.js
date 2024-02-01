import { useState } from 'react';
import './App.css';

const App = () => {
  //Const state - hook
  // Name and setter function for 1st variable
  // inside use state we provide the initial value
  const [counter, setCounter] = useState();
  return (
    <div className="App">
      <button onClick={() => alert('clicked')}>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
