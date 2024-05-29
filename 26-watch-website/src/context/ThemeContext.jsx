import React, { useState, useEffect, createContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkTheme = 'dark-theme';
  const [theme, setTheme] = useState(
    localStorage.getItem('selected-theme') || 'light'
  );

  // Update theme in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('selected-theme', theme);
  }, [theme]);

  // Toggle theme when button is clicked
  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // Add or remove dark theme class from body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }
  }, [theme]);

  // Provide the theme, handleClick function, and Icon to children
  const Icon = theme === 'light' ? BiMoon : BiSun;

  return (
    <ThemeContext.Provider value={{ theme, handleClick, Icon }}>
      {children}
    </ThemeContext.Provider>
  );
};
