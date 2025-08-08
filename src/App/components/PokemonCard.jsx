export default function PokemonCard({ pokemon }) {
  return (
    <article
      className="card group relative transform transition duration-300 hover:scale-105 hover:-translate-y-1 text-left w-full"
    >
      <div className="absolute inset-0 opacity-10 bg-grass rounded-2xl" />
      <div className="flex flex-col p-4">
        <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4">
          <img
            loading="lazy"
            alt={pokemon.name}
            src={pokemon.frontImage}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100"
          />
        </div>

        <h3 className="text-lg font-semibold mb-2 truncate capitalize">{pokemon.name}</h3>

        <ul aria-label={pokemon.name + " types"} className="flex flex-wrap gap-2 mt-auto">
          {pokemon?.types?.map((type) => (
            <li key={type} className="badge">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
