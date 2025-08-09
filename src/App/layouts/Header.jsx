import { ThemeToggler } from "../components";
import { HeartIcon } from "../components/ui";
import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="h-20 grid place-items-center bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold"
        >
          <img aria-hidden="true" className="w-8 h-8" src="/favicon.ico" alt="" />
          <h1>PokéPedia</h1>
        </Link>

        <div className="flex gap-2">
          <Navigations />
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}

const Navigations = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center gap-2">
      {location.pathname === "/favourites" ? null : (
        <Link
          to="/favourites"
          className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <HeartIcon />
          <span>Favourites</span>
        </Link>
      )}
    </nav>
  )
}
