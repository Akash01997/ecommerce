import React, { useState } from 'react'
import { createContext } from 'react'

export let ThemeStore = createContext();

const ThemeContext = ({children}) => {

    let [theme, setTheme] = useState(localStorage.getItem("Theme"));
    
  return (
    <ThemeStore.Provider value={{theme, setTheme}}>
      {children}
    </ThemeStore.Provider>
  )
}

export default ThemeContext;
