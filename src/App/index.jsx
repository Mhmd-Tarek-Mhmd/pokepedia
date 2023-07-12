import { useState, useEffect } from "react";

import { getFromStorage, setToStorage, getPageData } from "./helpers";

import { Header, Main } from "./layouts";
import { Loader, SearchBar, Pagination, PokemonList } from "./components";

function App() {
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
        : data.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          );

      getPageData(showedData, page).then(({ pagination, pokemon }) => {
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
      <Header />
      <Main>
        <SearchBar query={query} setQuery={setQuery} />
        {!isLoading ? (
          <>
            <PokemonList pokemonData={pokemonData} />
            {pokemonData.length && (
              <Pagination
                page={page}
                setPage={setPage}
                paginationData={paginationData}
              />
            )}
          </>
        ) : (
          <Loader />
        )}
      </Main>
    </>
  );
}

export default App;
