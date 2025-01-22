import React from "react";
import Task4 from "./task4";

const Welcome = () => {
  const style1 = {
    color: "green",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const style2 = {
    color: "orange",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const style3 = {
    color: "pink",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <span style={style1}>Orange</span> <span style={style2}>Coding</span>{" "}
      <span style={style3}>Academy</span>
    </div>
  );
};

export default Welcome;
