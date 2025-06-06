import { useEffect, useRef } from 'react';

import { XIcon } from "./ui/Icons";

export default function PokemonModal({ isOpen, pokemon, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current.focus();
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={pokemon?.name + " details"}
      className="fixed inset-0 z-50 w-screen h-screen bg-gray-50 dark:bg-gray-950 backdrop:hidden"
    >
      <div className='w-full h-full overflow-y-auto'>
        <header className="py-4 sticky top-0 z-10 p-4 bg-white dark:bg-gray-800 shadow-sm">
          <button
            ref={ref}
            type="button"
            onClick={handleClose}
            aria-label="Close Modal"
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus-visible:bg-gray-50 focus-visible:text-gray-600 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 dark:focus-visible:bg-gray-900 dark:focus-visible:text-gray-300"
          >
            <XIcon />
          </button>
        </header>

        <div className="container">
          <section className="py-8">
            <div className="flex flex-wrap-reverse md:flex-nowrap gap-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold mr-3 capitalize">{pokemon?.name}</h1>
                  </div>

                  {pokemon?.species?.genus && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      {pokemon.species.genus}
                    </p>
                  )}

                  <div className="flex gap-2 mb-6">
                    {pokemon?.types?.map((type) => (
                      <span key={type} className="badge badge-lg">{type}</span>
                    ))}
                  </div>

                  {pokemon?.species?.description && (
                    <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1">
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
                  alt={pokemon?.name}
                  src={pokemon?.frontImage}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold mb-4">Abilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {pokemon?.abilities?.map((ability) => (
                <li
                  key={ability.name}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
                >
                  <h3 className="font-medium mb-1 capitalize">
                    {(ability.name.replace('-', ' '))}
                  </h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{ability.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
