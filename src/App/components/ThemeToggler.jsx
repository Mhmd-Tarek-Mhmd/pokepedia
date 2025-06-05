import React from "react";
import { MoonIcon, SunIcon } from "./ui/Icons.jsx";

function ThemeToggler() {
  const [theme, setTheme] = React.useState(
    document.documentElement.dataset.theme
  );

  const handleToggleTheme = () => {
    setTheme(
      (document.documentElement.dataset.theme =
        theme === "dark" ? "light" : "dark")
    );
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="grayscale-[0.4] text-lg dark:text-xl cursor-pointer"
      aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggler;
