import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeftIcon } from "../components/ui/Icons";

export default function Section({ title, subTitle, children, className }) {
  const location = useLocation();

  return (
    <section className={className}>
      {location.pathname === "/" ? null : (
        <div className="mb-4">
          <Link
            to="/"
            aria-label="Go back to home"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeftIcon />
            <span>Back to Home</span>
          </Link>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-2">{title || "Pokémon Encyclopedia"}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-7">
        {subTitle || "Explore the world of Pokémon with detailed information on every species."}
      </p>

      {children}
    </section>
  );
}
