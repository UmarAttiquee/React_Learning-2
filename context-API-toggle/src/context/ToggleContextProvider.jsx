import React, { useState } from 'react'
import ToggleContext from './toggleContext'

function ToggleContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  return (
    <ToggleContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleContextProvider
