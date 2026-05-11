import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {count >= 5 && <h3>Goal Reached!</h3>}

      <hr />

      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>Your Message: {message}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
};
