import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/TodoReducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = (todoTitle) => {
    dispatch({ type: "ADD_TODO", payload: todoTitle });
    // console.log("working");
  };

  const toggleTodoCompleted = (id) => {
    console.log("working");
    dispatch({ type: "TODO_COMPLETED", id: id });
  };
  const clearTodo = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm add={add} />
      <TodoList
        todos={state.todos}
        clearTodo={clearTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
