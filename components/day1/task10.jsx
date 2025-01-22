import React from "react";
import Task10 from "./task10";
const StyledList = ({ items }) => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const itemStyle = {
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    width: "100px",
    textAlign: "center",
  };

  return (
    <div style={listStyle}>
      {items.map((item, index) => (
        <div key={index} style={itemStyle}>
          Student {index + 1}: {item}
        </div>
      ))}
    </div>
  );
};

export default StyledList;
