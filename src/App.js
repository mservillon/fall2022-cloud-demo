import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  function increment() {
    console.log('incrementing....')
    setCounter(++counter);
  }
  function decrement() {
    console.log('decrementing...')
    setCounter(--counter);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fall 2022 Cloud for Developers
        </p>
        <p>
          {counter}
        </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
