import { useState, useEffect } from "react";

import "./app.css";
import Main from "../layouts/Main";
import Header from "../layouts/Header";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";
import PokemonList from "../../components/PokemonList";
import { getFromStorage, setToStorage, getPageData } from "./helpers";

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
            name.toLowerCase().startsWith(query.toLowerCase())
          );

      getPageData(showedData, page).then(({ pagination, pokemon }) => {
        setPokemonData(pokemon);
        setPaginationData(pagination);
        setIsLoading(false);
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
        {!isLoading ? (
          <>
            <SearchBar setQuery={setQuery} />
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
