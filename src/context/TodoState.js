import React, { useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'

const TodoState = ({children}) => {

    const initialState = {
        todos: []
    }

    const [state,dispatch] = useReducer(TodoReducer,initialState)

    const addTodo = (todo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    const deleteTodo = (todoID) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todoID
        })
    }

    const editTodo = (todoID) => {
        dispatch({
            type: 'EDIT_TODO',
            payload: todoID
        })
    }

  return (
    <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        editTodo
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoState