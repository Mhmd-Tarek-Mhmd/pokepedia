import { useEffect, useState } from "react";
import { formatPokemon } from "../lib/utils";
import { getPokemons, getPokemon } from "../lib/api";

const useFetchPokemonList = ({ limit, offset, ids, onSuccess, onError }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const reset = () => {
    setData([]);
    setHasMore(false);
    setIsInitialLoading(true);
  }

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        let results = [];

        if (ids?.length) {
          setHasMore(false);
          const pokemonPromises = ids.map((id) => getPokemon(id));
          const pokemons = await Promise.all(pokemonPromises);
          results = pokemons.map(formatPokemon);
        } else {
          const pokemonsData = await getPokemons(limit, offset);
          setHasMore(Boolean(pokemonsData.next));
          const pokemonPromises = pokemonsData.results.map(p => getPokemon(p.name));
          const pokemons = await Promise.all(pokemonPromises);
          results = [...data, ...pokemons.map(formatPokemon)];
        }

        setData(results);
        onSuccess?.(results);
      } catch (err) {
        setError(err);
        onError?.(err);
      } finally {
        setIsLoading(() => false);
        setIsInitialLoading(() => false);
      }
    })();
  }, [limit, offset, JSON.stringify(ids)]);

  return { data, error, hasMore, isInitialLoading, isLoading, reset };
}

export default useFetchPokemonList;
