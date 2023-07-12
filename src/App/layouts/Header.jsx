import { ThemeToggler } from "../components";

function Header() {
  return (
    <header className="h-20 grid place-items-center shadow-sm dark:shadow-xl dark:bg-[#1f1f1f]">
      <h1 className="sr-only">poképedia</h1>
      <div className="container flex items-center justify-between">
        <img aria-hidden="true" className="w-8 h-8" src="favicon.ico" alt="" />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
