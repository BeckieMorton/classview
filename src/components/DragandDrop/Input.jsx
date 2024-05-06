import React from "react";
import { useState } from "react";

import "./Input.css";

export const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);

    setInput("");
  };
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
