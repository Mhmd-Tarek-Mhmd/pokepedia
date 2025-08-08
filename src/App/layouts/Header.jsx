import { ThemeToggler } from "../components";
import { HeartIcon } from "../components/ui";
import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="h-20 grid place-items-center bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <div
          className="flex items-center space-x-2 text-2xl font-bold"
        >
          <img aria-hidden="true" className="w-8 h-8" src="/favicon.ico" alt="" />
          <h1>PokéPedia</h1>
        </div>

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
          to='favourites'
          aria-label="Navigate to favourites list"
          className="icon-btn text-black dark:text-white"
        >
          <HeartIcon />
        </Link>
      )}
    </nav>
  )
}
