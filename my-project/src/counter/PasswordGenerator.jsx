import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function PasswordGenerator() {

  const ref = useRef()
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordLength, setPasswordLength] = useState(10)
  const [passwordChar, setpasswordChar] = useState(false)
  const [passwordNumber, setpasswordNumber] = useState(false)

  const generatePassword = useCallback(() => {
    let num = "1234567890"
    let char = "!@#$%^&*()_+"
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    let allChar = str
    if (passwordChar) allChar += char
    if (passwordNumber) allChar += num
    let pass = ""
    for (let i = 0; i <= passwordLength; i++) {
      pass += allChar[Math.floor(Math.random() * allChar.length)];
    }
    setPasswordValue(pass)
  }, [passwordLength, passwordChar, passwordNumber])


  useEffect(() => {
    generatePassword()
  }, [passwordLength, passwordChar, passwordNumber, generatePassword])

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '30px' }}>Password Generator</h1>

      <input
        type="text"
        value={passwordValue}
        ref={ref}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '30px',
          width: '300px',
          fontSize: '16px',
          display: 'block',
        }}
        readOnly
      />

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Length {passwordLength}</span>
          <input type="range" value={passwordLength} onChange={(e) => { setPasswordLength(Number((e.target.value))) }} />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Characters</span>
          <input type="checkbox" checked={passwordChar} onChange={() => { setpasswordChar(!passwordChar) }} />
        </label>
      </div>

      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Numbers</span>
          <input type="checkbox" checked={passwordNumber} onChange={() => { setpasswordNumber(!passwordNumber) }} />
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <button onClick={() => {
        navigator.clipboard.writeText(ref.current.value);
        ref.current.select();

      }}>Copy Password</button>      <h2> {passwordValue} </h2>
    </div>
  );
}
