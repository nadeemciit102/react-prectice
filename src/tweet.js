import React, { useState } from "react";

function Tweet({ name, msg }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <p>{msg}</p>
      <h3>{count}</h3>
      <button onClick={increment}> Like </button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

export default Tweet;
