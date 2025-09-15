import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), todo: "Hello World", status: false }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        status: false,
      };
      state.todos.push(todo);
    },

    delTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id != action.payload);
    },

    updTodo: (state, action) => {
      state.todos = state.todos.map((data) =>
        data.id === action.payload.id ? { ...data, ...action.payload } : data
      );
    },

    toggleTodo: (state, action) => {
      state.todos = state.todos.map((data) =>
        data.id === action.payload.id ? { ...data, status: !data.status } : data
      );
    },
  },
});

export const { addTodo, delTodo, updTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
