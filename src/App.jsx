import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import useTheme from "./context/Theme/ThemeContext";
import { useEffect } from "react";
function App() {
  const { themeMode, toggleTheme } = useTheme();
  useEffect(() => {
    document.querySelector("body").classList.remove("light", "dark");
    const currTheme = localStorage.getItem("theme") || "light";
    toggleTheme(currTheme);
    document.querySelector("body").classList.add(currTheme);
  }, [themeMode]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
