import clsx from "clsx";

const typeColors = {
  all: "bg-gray-600",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-500",
  poison: "bg-purple-500",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dragon: "bg-indigo-600",
  dark: "bg-gray-700",
  fighting: "bg-orange-600",
  flying: "bg-blue-300",
  bug: "bg-green-400",
  rock: "bg-yellow-700",
  ghost: "bg-purple-700",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  ground: "bg-yellow-600"
};

export const PokemonTypesBadges = ({ pokemon, className }) => {
  return (
    <ul
      aria-label={pokemon.name + " types"}
      className={clsx("flex flex-wrap gap-2", className)}
    >
      {pokemon?.types?.map((type) => (
        <li key={type} className={`badge ${typeColors[type]}`}>
          {type}
        </li>
      ))}
    </ul>
  )
}

export const PokemonAbilitiesBadges = ({ pokemon, className }) => {
  return (
    <ul
      aria-label={pokemon.name + " abilities"}
      className={clsx("flex flex-wrap gap-2", className)}
    >
      {pokemon?.abilities?.map((ability) => (
        <li key={ability?.name} className="badge">
          {ability?.name}
        </li>
      ))}
    </ul>
  )
}
