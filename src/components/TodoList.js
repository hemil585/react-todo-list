import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext);
  console.log(todos);
  return (
    <>
      {todos && todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
