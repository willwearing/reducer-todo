import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";

export default function TodoForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <form>
      <input type="text" name="item" />
      <button>Add</button>
    </form>
  );
}
