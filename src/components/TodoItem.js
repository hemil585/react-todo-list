import React, { useState } from "react";
import "./TodoItem.css";
import { AiFillEdit, AiOutlineCheck, AiFillDelete } from "react-icons/ai";

const TodoItem = ({ id, todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleSaveClick = () => {
    editTodo({
      id: id,
      todo: editedTodo,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {isEditing ? (
          <input
            type="text"
            value={editedTodo}
            onChange={handleEditChange}
            className="edit-input"
          />
        ) : (
          <li>{todo}</li>
        )}
      </div>
      <div className="buttons">
        {isEditing ? (
          <AiOutlineCheck
            size={"2.4rem"}
            onClick={handleSaveClick}
            className="save-btn"
          />
        ) : (
          <AiFillEdit
            size={"2.4rem"}
            onClick={handleEditClick}
            className="edit-btn"
          />
        )}
        <AiFillDelete
          size={"2.4rem"}
          onClick={() => deleteTodo(id)}
          className="delete-btn"
        />
      </div>
    </div>
  );
};

export default TodoItem;