import React, { use, useContext, useState } from 'react'
import UserContext from '../context_Login_SignUp/userContext'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  function handleSubmit() {
    setUser(username)
  }

  return (
    <div>Login

      <input type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} placeholder='Enter UserName' />
      <input type="password" name="" id="" />
      <button onClick={handleSubmit}> Submit</button>

    </div>
  )
}

export default Login