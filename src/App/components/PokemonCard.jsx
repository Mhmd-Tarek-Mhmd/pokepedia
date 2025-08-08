import { PokemonTypesBadges, PokemonAbilitiesBadges } from "./PokemonBadges";
import PokemonFavouriteToggler from "./PokemonFavouriteToggler";

export default function PokemonCard({ pokemon }) {
  return (
    <article
      className="card group relative transform transition duration-300 hover:scale-105 hover:-translate-y-1 text-left w-full"
    >
      <div className="absolute top-2 right-2 z-1 p-0.5 bg-white dark:bg-transparent rounded-full">
        <PokemonFavouriteToggler pokemon={pokemon} />
      </div>

      <div className="flex flex-col">
        <div className="relative aspect-square bg-gray-100 dark:bg-transparent overflow-hidden mb-3">
          <img
            loading="lazy"
            alt={pokemon.name}
            src={pokemon.frontImage}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100"
          />
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-lg font-semibold mb-2 truncate capitalize">{pokemon.name}</h3>
          <PokemonTypesBadges pokemon={pokemon} />
          <PokemonAbilitiesBadges pokemon={pokemon} className="mt-2" />
        </div>
      </div>
    </article>
  );
}
