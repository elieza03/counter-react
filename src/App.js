import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="coquette-container">
      <div className="coquette-card">
        <span className="ribbon-icon">🎀</span>
        <h1>Counter Palette</h1>

        <div className="counter-display-box">
          <h2 className="count-number">{count}</h2>
          
          <div className="conditional-msg">
            {count >= 5 ? (
              <p className="goal-text">୨୧ Goal Reached ୨୧</p>
            ) : (
              <p className="sub-text">blooming...</p>
            )}
          </div>

          <div className="coquette-buttons">
            <button className="pink-btn" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="pink-btn" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="soft-btn" onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div className="coquette-input-area">
          <input
            type="text"
            className="dainty-input"
            placeholder="Type a sweet note..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="live-note">𓍢ִ໋🌷͙֒ {message}</p>
        </div>
      </div>
    </div>
  );
}