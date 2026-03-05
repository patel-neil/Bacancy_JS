// 4. **useContext**
    
//In the sandbox, add a context (e.g. `ThemeContext` or `UserContext`), wrap part of the app in a Provider, 
// and build a child component that reads the value with `useContext` 
// and displays it (e.g. theme name or user name).

import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

export default function Task4() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    // 2. Provide the context value to the tree
    <ThemeContext.Provider value={theme}>
      <div style={{ 
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff' 
      }}>
        <h1>Theme Provider (Parent)</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* Notice we are NOT passing props to Child! */}
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const currentTheme = useContext(ThemeContext);

  return (
    <div style={{padding: '10px' }}>
      <h3>Child Component</h3>
      <p>The current theme is: <strong>{currentTheme}</strong></p>
    </div>
  );
}