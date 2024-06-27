import React, { useState } from 'react'
import { createContext } from 'react'

export let Theme = createContext(null);

const ThemeContext = ({children}) => {

    let [theme, setTheme] = useState("dark");
    
  return (
    <Theme.Provider value={{theme, setTheme}}>
      {children}
    </Theme.Provider>
  )
}

export default ThemeContext;
