import React from "react";
import TodoInput from "./TodoInput";
import "./TodoContainer.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default TodoContainer;
