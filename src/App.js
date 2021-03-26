import React, { useState } from "react";
import "./App.css";

const Component = () => <input />;

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      <img src="https://picsum.photos/200" alt="something" />
      <h1 style={{ color: show ? "red" : "blue" }}>Hello world</h1>
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      <Component />
    </div>
  );
}

export default App;
