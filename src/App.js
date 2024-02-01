import { useState , useEffect} from 'react';
import './App.css';

const App = () => {
  //Const state - hook
  // Name and setter function for 1st variable
  // inside use state we provide the initial value
  const [counter, setCounter] = useState(0);

  //A callback function
  // As soon as the above component renders, this one gives alert
  useEffect(() => {
    alert('Reload')
  })
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
