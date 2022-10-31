import React, { createContext, useContext, useState } from 'react';   
const ThemeContext = createContext({ theme: 'dark', undefined});

export const useTheme = () => useContext(ThemeContext)


export const ThemeProvider = ({children}) => { 
  const [theme, setTheme] = useState('dark');  
  
  const toggleColorMode = () => theme === 'light' ? setTheme('dark') : setTheme('light');
      
  return (
      <ThemeContext.Provider value={{ theme, toggleColorMode }}>
        {children}
      </ThemeContext.Provider> 
  )
}
