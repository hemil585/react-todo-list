const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      console.log("Editing todo with ID:", action.payload.id);
      console.log("New todo value:", action.payload.todo);
       return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, todo: action.payload.todo }
            : todo
        ),
        editingTodoID: action.payload.id,
      };
      case "CLEAR_ALL_TODO":
        return {
          ...state,
          todos: []
        }
    default:
      return state;
  }
};

export default TodoReducer;
