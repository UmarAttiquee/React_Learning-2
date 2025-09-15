import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/TodoSlice'

function TodoForm() {
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  function handle(e) {
    e.preventDefault()
    dispatch(addTodo(data))
    setData('') // clear input after submit

  }
  return (
    <>
      <form action="" onSubmit={handle}>
        <input value={data} onChange={(e) => { setData(e.target.value) }} type="text" placeholder='Enter Input' />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default TodoForm