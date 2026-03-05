import React, { useRef } from "react";

export default function Task6() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#e0f7fa";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>useRef: Focus Manager</h3>
      <input ref={inputRef} type="text" placeholder="I'm blurry..." />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}