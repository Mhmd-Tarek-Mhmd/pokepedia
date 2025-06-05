import { useState } from "react";
import { useFetchPokemonList } from "../hooks";
import { Loader, PokemonList } from "../components";

const limit = 20;

function Pokemons() {
  const [offset, setOffset] = useState(0);
  const { data, error, hasMore, isInitialLoading, isLoading } = useFetchPokemonList(limit, offset);

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  return (
    <>
      {!isInitialLoading ? (
        <>
          <PokemonList pokemonData={data}/>
          {hasMore || !isLoading ? (
            <div className="mt-15 mb-10 text-center">
              <button className="btn w-40 disabled:opacity-20 disabled:cursor-no-drop" onClick={loadMore}>
                Load More
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <Loader/>
      )}
    </>
  );
}

export default Pokemons;
