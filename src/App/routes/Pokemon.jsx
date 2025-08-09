import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";

import { getPokemon } from "../lib/api";
import { formatPokemon } from "../lib/utils";

import Section from "../layouts/Section";
import { PokemonTypesBadges } from "../components/PokemonBadges";
import PokemonFavouriteToggler from "../components/PokemonFavouriteToggler";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams({ from: '/pokemon/$pokemonId' });

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(pokemonId);
      setPokemon(formatPokemon(data));
    };

    if (pokemonId) fetchPokemon();
  }, [pokemonId]);

  if (!pokemon) {
    return (
      <Section>
        <p role="alert" className="alert">
          Pokémon not found
        </p>
      </Section>
    );
  }

  return (
    <Section title=" " subTitle=" ">
      {/* Basic Info */}
      <div className="flex items-center flex-wrap-reverse md:flex-nowrap gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold capitalize">{pokemon?.name}</h2>
              <PokemonFavouriteToggler pokemon={pokemon} className="mt-2" />
            </div>

            {pokemon?.species?.genus && (
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
                {pokemon.species.genus}
              </p>
            )}

            <div className="flex gap-2 mb-6">
              <PokemonTypesBadges pokemon={pokemon} />
            </div>

            {pokemon?.species?.description && (
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 border-l-4 border-gray-300 dark:border-gray-600 pl-4 pt-1 pb-2">
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
            className="w-full h-full object-contain min-h-[350px]"
          />
        </div>
      </div>

      {/* Abilities */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Abilities</h2>
        <PokemonAbilities abilities={pokemon?.abilities} />
      </div>

      {/* Stats */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Base Stats</h2>
        <PokemonStats stats={pokemon?.stats} />
      </div>
    </Section>
  );
};

export default Pokemon;

/*
  Abilities
*/

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
};

/*
  Stats
*/

const maxStats = {
  hp: 255,
  attack: 190,
  defense: 250,
  'special-attack': 194,
  'special-defense': 250,
  speed: 200,
};
const statNames = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};
const getStatColor = (value, max) => {
  const percentage = (value / max) * 100;
  if (percentage < 30) return 'bg-red-500';
  if (percentage < 50) return 'bg-orange-500';
  if (percentage < 70) return 'bg-yellow-500';
  if (percentage < 90) return 'bg-green-500';
  return 'bg-emerald-500';
};

const PokemonStats = ({ stats }) => {
  const totalStats = stats?.reduce((sum, stat) => sum + stat?.base, 0);
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-md space-y-4">
      {stats?.map((stat) => {
        const statName = stat?.name;
        const maxStat = maxStats?.[statName] || 100;
        const percentage = Math.min(100, Math.round((stat?.base / maxStat) * 100));

        return (
          <div key={statName} className="flex items-center">
            <div className="w-20 font-medium capitalize text-gray-700 dark:text-gray-300">
              {statNames[statName] || statName}
            </div>
            <div className="w-12 font-mono text-right mr-3">
              {stat.base}
            </div>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                style={{ width: `${percentage}%` }}
                className={`h-full ${getStatColor(stat.base, maxStat)}`}
              />
            </div>
          </div>
        );
      })}

      <div className="flex items-center pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="w-20 font-medium text-gray-700 dark:text-gray-300">
          Total
        </div>
        <div className="w-12 font-mono text-right mr-3 font-bold">
          {totalStats}
        </div>
      </div>
    </div>
  );
};