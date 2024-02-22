import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = (theme) => {
    setThemeMode(theme);
  };
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
