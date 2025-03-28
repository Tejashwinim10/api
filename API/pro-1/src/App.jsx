import React from "react";
import StudentData from "./studentdata";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Student Portal</h1>
        <StudentData />
      </header>
    </div>
  );
};

export default App;