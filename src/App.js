import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoState from "./context/TodoState";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="main-container">
      <TodoState>
        <TodoContainer />
      </TodoState>
    </div>
  );
};

export default App;
