import { createSlice } from "@reduxjs/toolkit";

// ada tiga yang diisi di parameter
const initialState = {
  todos: [],
  lastId: 1,
};
const todoSLice = createSlice({
  initialState,
  // dipakai untuk action
  name: "todos",
  // objek isinya fungsi2 reducer
  reducers: {
    addTodos: (prevState, action) => {
      const newTodos = [...prevState.todos, action.payload];
      // slice menggunakan immer js tanpa return
      prevState.todos = newTodos;
      prevState.lastId++;
    },
    deleteTodos: (prevState, action) => {},
    editTodos: (prevState, action) => {},
    toggleTodos: (prevState, action) => {},
  },
});

//
export const { addTodos, deleteTodos } = todoSLice.actions;
export default todoSLice.reducer;
