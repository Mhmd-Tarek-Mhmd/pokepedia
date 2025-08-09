import { Link } from "@tanstack/react-router";
import { PokemonCard } from "../components";

function FavouritesList({ favourites }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {favourites.map((pokemon) => (
        <Link
          key={pokemon.id}
          to={`/pokemon/${pokemon.name}`}
          className="focus-visible:outline-slate-200 dark:focus-visible:outline-slate-600 cursor-pointer"
        >
          <PokemonCard pokemon={pokemon}/>
        </Link>
      ))}
    </div>
  );
}

export default FavouritesList;
