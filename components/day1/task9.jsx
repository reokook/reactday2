import React from "react";
import Task9 from "./task9";

const App = () => {
  const students = ["student1", "student2", "student3", "student4"];

  return (
    <div>
      <Task9 items={students} />
    </div>
  );
};

export default App;
