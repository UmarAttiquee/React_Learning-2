import React, { useState } from 'react'

function Calculator() {

  const buttonsVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "/", "*", "-", "c", "="]
  const [input, setInput] = useState("")
  function handleClick(val) {
    if (val == 'c') {
      setInput('')
    }
    else if (val == "=") {
      setInput(eval(input))
    }
    else {
      setInput(prev => prev + val)
    }
  }
  return (
    <>
      <h1>Calculator</h1>
      <input value={input} type="text" readOnly />
      <div>
        {buttonsVal.map((val) => (
          <button key={val} onClick={() => { handleClick(val) }}>{val}</button>
        ))}
      </div>
    </>

  )
}

export default Calculator