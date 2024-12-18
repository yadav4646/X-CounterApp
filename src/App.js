import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incremenet = () => {
    setCount(count + 1);
  };

  const decremenet = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <button onClick={incremenet}>Incremenet</button>
      <button onClick={decremenet}>Decremenet</button>
    </div>
  );
}

export default App;
