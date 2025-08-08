import { Modal } from "./ui";
import PokemonStats from "./PokemonStats";

const PokemonModal = ({ pokemon, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="container">
        {/* Basic Info */}
        <section className="py-8">
          <div className="flex items-center flex-wrap-reverse md:flex-nowrap gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-baseline mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold mr-3 capitalize">{pokemon?.name}</h2>
                </div>

                {pokemon?.species?.genus && (
                  <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
                    {pokemon.species.genus}
                  </p>
                )}

                <div className="flex gap-2 mb-6">
                  {pokemon?.types?.map((type) => (
                    <span key={type} className="badge badge-lg">{type}</span>
                  ))}
                </div>

                {pokemon?.species?.description && (
                  <blockquote className="min-h-[70px] text-lg italic text-gray-700 dark:text-gray-300 border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1">
                    {pokemon.species.description}
                  </blockquote>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Height</h3>
                  <p className="text-lg font-medium">{(pokemon?.height / 10).toFixed(1)}m</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Weight</h3>
                  <p className="text-lg font-medium">{(pokemon?.weight / 10).toFixed(1)}kg</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Base Exp</h3>
                  <p className="text-lg font-medium">{pokemon?.baseExperience || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:max-w-[400px] mx-auto">
              <img
                loading="lazy"
                alt={pokemon?.name}
                src={pokemon?.frontImage}
                className="w-full h-full object-contain min-h-[35 0px]"
              />
            </div>
          </div>
        </section>

        {/* Abilities */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Abilities</h2>
          <PokemonAbilities abilities={pokemon?.abilities} />
        </section>

        {/* Stats */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Base Stats</h2>
          <PokemonStats stats={pokemon?.stats} />
        </section>
      </div>
    </Modal>
  )
}

export default PokemonModal;

const PokemonAbilities = ({ abilities }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {abilities?.map((ability) => (
        <li
          key={ability.name}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
        >
          <article>
            <h3 className="font-medium mb-1 capitalize">
              {(ability.name.replace('-', ' '))}
            </h3>
            <p className='text-xs text-gray-500 dark:text-gray-400'>{ability.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
