import React, { useState, useEffect, useCallback, useRef } from 'react';

function Pass() {

  const [passwordValue, setpasswordValue] = useState('')
  const [passwordLength, setpasswordLength] = useState(10)
  const [passwordNumber, setpasswordNumber] = useState(false)
  const [passwordChar, setpasswordChar] = useState(false)

  const ref = useRef()
  function copyPassword() {
    navigator.clipboard.writeText(ref.current.value)
    ref.current.select()
  }

  const handlePassword = useCallback(() => {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let num = "1234567890"
    let char = "!@#$%^&*()_+"

    let val = str
    if (passwordNumber) val += num;
    if (passwordChar) val += char;

    let pass = ""
    for (let i = 0; i < passwordLength; i++) {
      pass += val[Math.floor(Math.random() * val.length)]
    }
    setpasswordValue(pass)
  }, [passwordLength, passwordNumber, passwordChar, setpasswordValue])


  useEffect(() => {
    handlePassword()
  }, [passwordLength, passwordNumber, passwordChar, setpasswordValue])


  return (
    <div className="pass-container">
      <h1>Password Generator</h1>

      <input style={{ padding: "30px", border: "1px solid black", width: "450px" }} type="text" ref={ref} value={passwordValue} readOnly className="password-output" />

      <div className="control">
        <label>
          <span>Password Length {passwordLength}</span>
          <input type="range" value={passwordLength} onChange={(e) => { setpasswordLength(e.target.value) }} min="5" max="80" />
        </label>
      </div>

      <div className="control">
        <label>
          <input type="checkbox" checked={passwordChar} onChange={() => { setpasswordChar(!passwordChar) }} />
          <span>Include Special Characters</span>
        </label>
      </div>

      <div className="control">
        <label>
          <input type="checkbox" checked={passwordNumber} onChange={() => { setpasswordNumber(!passwordNumber) }} />
          <span>Include Numbers</span>
        </label>
      </div>

      <div className="button-group">
        <button onClick={handlePassword} >Generate Password</button>
        <button onClick={copyPassword} >Copy</button>
      </div>

      <p className="message">{passwordValue}</p>
    </div>
  );
}

export default Pass;
