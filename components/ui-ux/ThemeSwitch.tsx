import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="btn btn-neutral" onClick={toggleTheme}>
      Switch Theme
    </button>
  );
}

export default ThemeSwitch;
