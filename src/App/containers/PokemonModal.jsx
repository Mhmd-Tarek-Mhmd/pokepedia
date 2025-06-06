import { Modal } from "../components/ui";
import { PokemonDetails } from "../components";

const PokemonModal = ({ pokemon, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}  onClose={onClose}>
      <PokemonDetails  pokemon={pokemon} />
    </Modal>
  )
}

export default PokemonModal;
