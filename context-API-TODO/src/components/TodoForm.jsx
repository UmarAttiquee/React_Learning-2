import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm({ todo }) {
  const { delTodo, toggleTodo, updTodo } = useContext(TodoContext);
  const [isTodoEditable, setTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    if (todoMsg.trim() !== '') {
      updTodo(todo.id, { ...todo, todo: todoMsg });
      setTodoEditable(false);
    }
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    delTodo(todo.id);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
        alignItems: 'center',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      {isTodoEditable ? (
        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.todo}
        </span>
      )}

      {isTodoEditable ? (
        <button onClick={editTodo}>✅ Save</button>
      ) : (
        <button onClick={() => setTodoEditable(true)}>✏️ Edit</button>
      )}

      <button onClick={handleDelete}>🗑️ Delete</button>
    </div>
  );
}

export default TodoForm;
