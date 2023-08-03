import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./TodoInput.css";
import { nanoid } from "nanoid";
import TodoContext from "../context/TodoContext";

const TodoInput = () => {
  const { addTodo, editTodo, editingTodoID } = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (editingTodoID) {
      editTodo({
        id: editingTodoID,
        todo: todo,
      });
    } else {
      addTodo({
        id: nanoid(),
        todo: todo,
      });
    }
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="todo-input">
        <input
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Add your new todo"
          value={todo}
          onChange={handleChange}
        ></input>
        <AiOutlinePlus
          className="add-btn"
          onClick={handleAddTodo}
          size={"2.2rem"}
        ></AiOutlinePlus>
      </div>
    </>
  );
};

export default TodoInput;