import React, { useState } from "react";

function UserInputTracker() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default UserInputTracker;
