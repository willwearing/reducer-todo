import React, { useState, useReducer } from "react";

const Todo = (props) => {
  console.log("will", props);
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
      onClick={() => props.toggleTodoCompleted(props.item.id)}
    >
      {props.item.todo}
    </div>
  );
};

export default Todo;

// const Todo = props => {
//   return(
//       <div
//       className={`todo${props.todo.completed ? 'completed' : ''}`}
//       onClick={() => props.toggleTodoCompleted(props.todo.id)}>
//           <p>{props.todo}</p>
//       </div>
//   )
// }
