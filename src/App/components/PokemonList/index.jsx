import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal from "../PokemonModal";

function PokemonList({ pokemonData }) {
  const [modal, setModal] = useState(null);

  const handleOpenModal = (data) => {
    setModal(data);
    modalRef?.current?.showModal();
  }
  const handleCloseModal = () => {
    setModal(null);
    modalRef?.current?.close();
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemonData.length ? (
        pokemonData.map((pokemon) => (
          <button onClick={() => handleOpenModal({ pokemon })} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </button>
        ))
      ) : (
        <p
          role="alert"
          aria-live="assertive"
          className="text-black dark:text-white"
        >
          No pokemons matched
        </p>
      )}

      <PokemonModal isOpen={Boolean(modal)} onClose={handleCloseModal} {...modal} />
    </div>
  );
}

export default PokemonList;
