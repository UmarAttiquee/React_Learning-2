import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>

      <NavLink to="/" className={({ isActive }) =>
        `${isActive ? "text-red-600" : "text-black"}`
      }>
        Home
      </NavLink>

      <NavLink to="/about" className={({ isActive }) =>
        `${isActive ? "text-red-600" : "text-black"}`
      }>
        About
      </NavLink>

      <NavLink to="/user/:id" className={({ isActive }) =>
        `${isActive ? "text-red-600" : "text-black"}`
      }>
        User
      </NavLink>
      <NavLink to="/github" className={({ isActive }) =>
        `${isActive ? "text-red-600" : "text-black"}`
      }>
        Github
      </NavLink>
    </>
  )
}

export default Header