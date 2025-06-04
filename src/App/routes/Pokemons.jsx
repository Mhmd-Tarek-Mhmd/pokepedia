import {useEffect, useState} from "react";
import {Loader, Pagination, PokemonList, SearchBar} from "../components";
import {getFromStorage, getPageData, setToStorage} from "../helpers.js";

function Pokemons() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [paginationData, setPaginationData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    if (data.length) {
      const showedData = !query
        ? data
        : data.filter(({name}) =>
          name.toLowerCase().includes(query.toLowerCase())
        );

      getPageData(showedData, page).then(({pagination, pokemon}) => {
        setPokemonData(pokemon);
        setPaginationData(pagination);
        setTimeout(() => setIsLoading(false), 100);
      });
    }
  }, [data.length, page, query]);

  useEffect(() => {
    const storageData = getFromStorage();

    storageData
      ? setData(storageData)
      : fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((res) => res.json())
        .then(async (data) => {
          const sortedData = data.results.sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          setData(sortedData);
          setToStorage(sortedData);
        });
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <SearchBar query={query} setQuery={setQuery} />
          <PokemonList pokemonData={pokemonData} />
          {pokemonData.length ? (
            <Pagination
              page={page}
              setPage={setPage}
              paginationData={paginationData}
            />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Pokemons;
