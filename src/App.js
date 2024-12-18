import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <button onClick={increment}>Incremenet</button>
      <button onClick={decrement}>Decremenet</button>
    </div>
  );
}

export default App;
