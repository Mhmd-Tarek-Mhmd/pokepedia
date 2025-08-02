export const formatPokemon = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight, // gm
    height: pokemon.height, // cm
    baseExperience: pokemon.base_experience,
    types: pokemon.types.map(({ type }) => type.name),
    stats: pokemon.stats.map((s) => ({ name: s?.stat?.name, base: s?.base_stat })),
    abilities: pokemon?.abilities?.map((a) => ({
      name: a.name,
      description: a?.flavor_text_entries
        ?.find((entry) => entry?.language?.name === "en")?.flavor_text
        ?.replace(/\f/g, ' ')
        ?.replace(/\u00ad\n/g, '')
        ?.replace(/\u00ad/g, '')
        ?.replace(/\n/g, ' '),
    })),
    species: {
      genus: pokemon?.species?.genera?.find(g => g?.language?.name === 'en')?.genus,
      description: pokemon?.species?.flavor_text_entries
        ?.find(entry => entry?.language?.name === 'en')?.flavor_text
        ?.replace(/\f/g, ' ')
        ?.replace(/\u00ad\n/g, '')
        ?.replace(/\u00ad/g, '')
        ?.replace(/\n/g, ' '),
    },
    frontImage:
      pokemon.sprites?.other?.["official-artwork"]?.front_default ||
      pokemon.sprites?.front_default ||
      pokemon.sprites?.other.dream_world?.front_default,
  };
};
