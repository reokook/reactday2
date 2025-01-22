import React, { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const themeStyles = {
    backgroundColor: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#000",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme}>
        Toggle to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
