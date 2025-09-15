import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo, toggleTodo, updTodo } from '../feature/todo/TodoSlice'

function TodoItems({ todo }) {
  const dispatch = useDispatch()
  const [isEditable, setisEditable] = useState(false)
  const [isMsg, setIsMsg] = useState(todo.todo)

  const updateTodo = () => {
    dispatch(updTodo({ id: todo.id, todo: isMsg }))
    setisEditable(false)
  }
  const deleteTodo = () => {
    dispatch(delTodo(todo.id))
  }
  const toggleTODO = () => {
    dispatch(toggleTodo(todo.id))

  }

  return (
    <div>
      <input type="checkbox" checked={todo.status} onChange={(e) => { toggleTODO(e.target.value) }} />

      {isEditable ? (<input type="text" value={isMsg} onChange={(e) => { setIsMsg(e.target.value) }} />) : (<span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
        {todo.todo}
      </span>)}

      {isEditable ? (<button onClick={updateTodo}>Save</button>) : (<button onClick={() => { setisEditable(true) }} >Edit</button>)}
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItems