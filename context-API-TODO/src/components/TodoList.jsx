import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoForm from './TodoForm'; // ✅ Import TodoForm

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoForm todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
