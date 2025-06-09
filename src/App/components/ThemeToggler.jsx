import React from "react";
import { MoonIcon, SunIcon } from "./ui";

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
      className="icon-btn cursor-pointer text-black dark:text-white"
      aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggler;
