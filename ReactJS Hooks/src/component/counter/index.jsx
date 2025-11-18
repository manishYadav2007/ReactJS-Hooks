import { useState } from "react";

import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="bg">
      <div className="counter-card">
        <p className="counter-text">
          You Clicked <span className="counter">{count}</span> Times
        </p>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="increase-btn"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
