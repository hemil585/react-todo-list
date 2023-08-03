import React, { useContext } from "react";
import "./TodoFooter.css";
import TodoContext from "../context/TodoContext";

const TodoFooter = () => {
  const { todos, clearAllTodos } = useContext(TodoContext);
  const todosLenght = todos.length;

  const handleClearAll = () => {
    clearAllTodos();
  };

  return (
    <div className="todo-footer">
      <p>
        You have {todosLenght} pending {todosLenght > 1 ? "tasks" : "task"}
      </p>
      <button className="clear-all-btn" onClick={handleClearAll}>
        Clear all
      </button>
    </div>
  );
};

export default TodoFooter;
