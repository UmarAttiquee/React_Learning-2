import React, { useContext, useEffect } from 'react'
import ToggleContext from '../context/toggleContext'

function Home() {
  const { themeMode, lightTheme, darkTheme } = useContext(ToggleContext)

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  function handle() {
    if (themeMode === 'light') {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={themeMode === 'dark'}
          onChange={handle}
        />
        Dark Mode
      </label>
    </div>
  )
}

export default Home
