import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(10)
  const [error, setError] = useState('')


  let num = "345"
  console.log(typeof num)

  let nu = Number(num)
  console.log(typeof nu)

  function addHandle() {
    if (counter <= 415) {
      let add = counter + 1

      console.log("Cicked Add ", add)
      setCounter(add)

      setCounter(prev => prev + 1)

      setCounter(prev => prev + 1)

      setCounter(prev => prev + 1)
      setError('')

    }
    else {

      setError("Value Excedded to its Max")
    }



  }

  function remHandle() {
    if (counter > 5) {
      let add = counter - 1
      console.log("Cicked Remove ", add)
      setCounter(add)

      setError('')
    }
    else {

      setError("Value Excedded to its min")
    }
  }

  return (
    <>
      <h1>Counter Value: {counter} </h1>
      {error}
      <button onClick={addHandle}>Add  </button>
      <button onClick={remHandle}>Remove</button>
    </>
  )
}

export default Counter
