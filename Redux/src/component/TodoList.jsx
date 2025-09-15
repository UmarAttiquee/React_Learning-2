import React from 'react'
import { useSelector } from 'react-redux'

import TodoItems from './TodoItems'

function TodoList() {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>

              <TodoItems todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList