import { useState } from "react";
import PokemonModal  from "./PokemonModal";
import { PokemonCard } from "../components";

function PokemonsList({ pokemons }) {
  const [modal, setModal] = useState(null);

  const handleOpenModal = (data) => {
    setModal(data);
  }
  const handleCloseModal = () => {
    setModal(null);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemons.length ? (
          pokemons.map((pokemon) => (
            <button onClick={() => handleOpenModal({ pokemon })} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </button>
          ))
        ) : (
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p
              role="alert"
              aria-live="assertive"
              className="text-gray-600 dark:text-gray-400"
            >
              No Pokémon found
            </p>
          </div>
        )}
      </div>

      <PokemonModal isOpen={Boolean(modal)} onClose={handleCloseModal} {...modal} />
    </>
  );
}

export default PokemonsList;
