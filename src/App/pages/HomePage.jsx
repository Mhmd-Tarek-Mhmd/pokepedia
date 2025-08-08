import { useEffect, useState } from "react";
import { useFetchPokemonList } from "../hooks";

import { getPokemons, getPokemonTypes } from "../lib/api";

import { PokemonsList } from "../components";
import { Loader, AutocompleteInput } from "../components/ui";

const limit = 20;
const filtersInitialState = { query: null, type: null };
const getIds = (filters) => {
  if (filters.query) return [filters.query?.value];
  if (filters.type) return filters.type?.value;
  return [];
}

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState(filtersInitialState);
  const [options, setOptions] = useState({ pokemons: [], types: [] });
  const {
    data,
    reset,
    hasMore,
    isLoading,
    isInitialLoading,
  } = useFetchPokemonList({ limit, offset, ids: getIds(filters) });

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  const handleChange = (values) => {
    reset();
    setOffset(0);
    setFilters({ ...filtersInitialState, ...values });
  }

  const handleChangeQuery = (query) => {
    handleChange({ query });
  }

  const handleChangeType = (type) => {
    handleChange({ type });
  }

  useEffect(() => {
    (async () => {
      const data = await getPokemons(99999);
      const pokemons = data?.results?.map(r => ({ label: r.name, value: r.name }));

      const types = await getPokemonTypes();

      setOptions(prev => ({ ...prev, pokemons, types }));
    })();
  }, []);

  return (
    <section className="pb-8">
      <h2 className="text-3xl font-bold mb-2">Pokémon Encyclopedia</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-7">
        Explore the world of Pokémon with detailed information on every species.
      </p>

      {/* Filters */}
      <div className="bg-gray-white dark:bg-gray-800 shadow-sm  rounded-2xl p-6 mb-7 flex gap-3">
        <AutocompleteInput options={options?.pokemons || []} onSelect={handleChangeQuery} className="flex-1/2" value={filters.query} />
        <AutocompleteInput isSelect placeholder="Select a type" options={options?.types} onSelect={handleChangeType} className="flex-1/2" value={filters.type} />
      </div>

      {!isInitialLoading ? (
        <>
          {/* List */}
          {data?.length ? (
            <>
              <PokemonsList pokemons={data} />
              {hasMore ? (
                <div className="mt-10 text-center">
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
