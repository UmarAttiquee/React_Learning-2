import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm({ todo }) {
  // Destructure actions from the context
  const { delTodo, toggleTodo, updTodo } = useContext(TodoContext);

  // Local state to track if the current todo is in "edit mode"
  const [isTodoEditable, setTodoEditable] = useState(false);

  // Local state to manage the updated message when editing
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // ✅ Called when the user clicks "Save" after editing
  const editTodo = () => {
    // Prevent saving empty todos
    if (todoMsg.trim() !== '') {
      // Update the todo in context with the new text
      updTodo(todo.id, { ...todo, todo: todoMsg });

      // Exit edit mode
      setTodoEditable(false);
    }
  };

  // ✅ Toggles the "completed" status of the todo
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  // ✅ Deletes the todo item from context
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
      {/* Checkbox to mark the todo as completed or not */}
      <input
        type="checkbox"
        checked={todo.completed} // checked based on the todo's current status
        onChange={handleToggle} // toggles status in context
      />

      {/* If in edit mode, show an input field to change the todo message */}
      {isTodoEditable ? (
        <input
          type="text"
          value={todoMsg} // controlled input
          onChange={(e) => setTodoMsg(e.target.value)} // update message in local state
        />
      ) : (
        // If not editing, just display the todo text
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.todo}
        </span>
      )}

      {/* Show "Save" button in edit mode, otherwise show "Edit" button */}
      {isTodoEditable ? (
        <button onClick={editTodo}>✅ Save</button>
      ) : (
        <button onClick={() => setTodoEditable(true)}>✏️ Edit</button>
      )}

      {/* Delete button always visible */}
      <button onClick={handleDelete}>🗑️ Delete</button>
    </div>
  );
}

export default TodoForm;
