import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal  from "./PokemonModal";

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
        {pokemons.map((pokemon) => (
          <button key={pokemon.id} onClick={() => handleOpenModal({ pokemon })}>
            <PokemonCard pokemon={pokemon}/>
          </button>
        ))}
      </div>

      <PokemonModal isOpen={Boolean(modal)} onClose={handleCloseModal} {...modal} />
    </>
  );
}

export default PokemonsList;
