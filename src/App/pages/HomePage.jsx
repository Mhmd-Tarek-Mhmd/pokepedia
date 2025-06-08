import { useState } from "react";
import { useFetchPokemonList } from "../hooks";

import { PokemonsList } from "../components";
import { Loader, AutocompleteInput } from "../components/ui";

const limit = 20;

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({ query: null });
  const [options, setOptions] = useState({ pokemons: [] });
  const {
    data,
    error,
    reset,
    hasMore,
    isLoading,
    isInitialLoading,
  } = useFetchPokemonList({
    limit,
    offset,
    filters,
    onSuccess: (result) => {
      setOptions(prev => ({
        ...prev,
        pokemons: result?.map(d => ({ value: d?.id, label: d?.name, avatar: d?.frontImage }))
      }));
    },
    onError: (error) => {},
  });

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  const handleChangeQuery = (val) => {
    reset();
    setFilters(prev => ({ ...prev, query: val }));
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-2">Pokémon Encyclopedia</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-7">
        Explore the world of Pokémon with detailed information on every species.
      </p>

      {/* Filters */}
      <div className="bg-gray-white dark:bg-gray-800 shadow-sm  rounded-2xl p-6 mb-7">
        <AutocompleteInput options={options?.pokemons} onSelect={handleChangeQuery} />
      </div>

      {!isInitialLoading ? (
        <>
          {/* List */}
          {data?.length ? (
            <>
              <PokemonsList pokemons={data} />
              {hasMore ? (
                <div className="mt-15 mb-10 text-center">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="btn w-40"
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <p role="alert" className="alert">
              No Pokémon found
            </p>
          )}
        </>
      ) : (
        <Loader/>
      )}
    </section>
  );
}
