import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
 
export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
 
  function changeTheme(theme) {
    setTheme(theme);
  }
 
  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('light-content');
        document.body.classList.remove('dark-content');
        break;
      case themes.dark:
        document.body.classList.add('dark-content');
        document.body.classList.remove('light-content');
        break;
    }
  }, [theme]);
 
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

