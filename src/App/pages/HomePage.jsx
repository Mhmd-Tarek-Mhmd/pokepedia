import { useState } from "react";
import { useFetchPokemonList } from "../hooks";

import { Loader } from "../components/ui";
import { PokemonsList } from "../containers";

const limit = 20;

function HomePage() {
  const [offset, setOffset] = useState(0);
  const { data, error, hasMore, isInitialLoading, isLoading } = useFetchPokemonList(limit, offset);

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  return (
    <section>
      {!isInitialLoading ? (
        <>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Pokémon Encyclopedia</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the world of Pokémon with detailed information on every species.
            </p>
          </div>
          <PokemonsList pokemons={data} />
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
    </section>
  );
}

export default HomePage;
