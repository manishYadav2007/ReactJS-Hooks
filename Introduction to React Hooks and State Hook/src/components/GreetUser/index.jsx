import "./style.css";
import { useState } from "react";
const GreetUser = () => {
  const [name, setName] = useState("");
  console.log(`Component Rerendred`);
  console.log(name);
  return (
    <div className="bg">
      <div className="container">
        <div>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            placeholder="Enter your name here....."
            className="userInput"
            value={name}
          />
        </div>
        <div className="text">
          <span>Hello {name}</span>
        </div>
      </div>
    </div>
  );
};

export default GreetUser;
