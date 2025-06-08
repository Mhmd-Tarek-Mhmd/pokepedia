import { ThemeToggler } from "../components";

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
        <ThemeToggler />
      </div>
    </header>
  );
}
