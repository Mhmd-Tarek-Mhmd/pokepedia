import PokemonCard from "./PokemonCard";

function PokemonList({ pokemonData }) {
  return (
    <div className="min-h-[calc(100vh-104px)] flex flex-wrap gap-4 justify-center">
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
