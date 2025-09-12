import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'

function TodoItem() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useContext(TodoContext)

  function handle(e) {
    e.preventDefault(``)
    addTodo({ todo: todo })
    setTodo("")
  }
  return (
    <>
      <form action="" onSubmit={handle}>
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} type="text" placeholder='Enter Todo' />
        <button  >Submit</button>
      </form>
    </>
  )
}


export default TodoItem 