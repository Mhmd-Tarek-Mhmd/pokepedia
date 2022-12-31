import React from "react";

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
      className="w-8 h-8 grayscale-[0.4] text-lg dark:text-xl"
      aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}

export default ThemeToggler;
