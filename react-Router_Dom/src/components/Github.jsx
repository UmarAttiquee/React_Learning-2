import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <>

      <h1> Followers {data.followers}</h1>

    </>
  )
}

export default Github

export const gitFollowers = async () => {
  const response = await fetch(' https://api.github.com/users/hiteshchoudhary ')
  return response.json()
}