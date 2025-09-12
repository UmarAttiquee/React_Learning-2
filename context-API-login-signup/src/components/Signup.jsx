import React, { useContext } from 'react'
import UserContext from '../context_Login_SignUp/userContext'

function Signup() {
  const { user } = useContext(UserContext)

  return (
    <>
      <h2> Welcome {user}</h2>
    </>
  )
}

export default Signup