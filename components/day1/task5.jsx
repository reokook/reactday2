import React from "react";
import Task5 from "./task5";

const Welcome = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
  };

  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const textStyle = {
    color: "green",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome, Orange Coding Academy</h1>
      <p style={textStyle}>Let's build something amazing together!</p>
    </div>
  );
};

export default Welcome;
