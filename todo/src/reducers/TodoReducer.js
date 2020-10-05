export const initialState = {
  todo: "Make a Todo List",
  completed: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "TODO_COMPLETED":
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};
