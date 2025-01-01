
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme; // Apply theme class to the body
    localStorage.setItem("theme", theme); // Save theme preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = () => useContext(ThemeContext);
