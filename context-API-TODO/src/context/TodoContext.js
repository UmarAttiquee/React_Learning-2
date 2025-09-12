import { createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello World",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  delTodo: (id) => {},
  updTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export default TodoContext;
