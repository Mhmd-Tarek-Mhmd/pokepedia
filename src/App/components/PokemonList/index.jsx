import PokemonCard from "./PokemonCard";

function PokemonList({ pokemonData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemonData.length ? (
        pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p
          role="alert"
          aria-live="assertive"
          className="text-black dark:text-white"
        >
          No pokemons matched
        </p>
      )}
    </div>
  );
}

export default PokemonList;
