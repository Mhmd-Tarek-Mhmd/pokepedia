import { useEffect, useState } from "react";
import { formatPokemon } from "../lib/utils";
import { getPokemons, getPokemon } from "../lib/api";

const useFetchPokemonList = (limit, offset) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const data = await getPokemons(limit, offset);
        setHasMore(Boolean(data.next));
        const pokemonPromises = data.results.map(p => getPokemon(p.name));
        const results = await Promise.all(pokemonPromises);
        setData(prev => [...prev, ...results.map(formatPokemon)]);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(() => false);
        setIsInitialLoading(() => false);
      }
    })();
  }, [limit, offset]);


  return { data, error, hasMore, isInitialLoading, isLoading };
}

export default useFetchPokemonList;
