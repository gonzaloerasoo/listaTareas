import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Sumar 1</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "1rem" }}
      >
        Restar 1
      </button>
    </div>
  );
}

export default Counter;
