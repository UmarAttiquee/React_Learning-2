import React, { useEffect, useState } from 'react';
import TodoContext from './TodoContext';

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const localData = localStorage.getItem("todos");
      return localData ? JSON.parse(localData) : [];
    } catch (err) {
      console.error("Error reading todos from localStorage:", err);
      return [];
    }
  });
  const addTodo = (newTodo) => {
    setTodos((prev) => [{ id: Date.now(), completed: false, ...newTodo }, ...prev]);
  };

  const delTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };




  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, addTodo, delTodo, updTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
