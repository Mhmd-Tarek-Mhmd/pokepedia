const storageKey = "poképedia";

export const getFromStorage = () =>
  JSON.parse(localStorage.getItem(storageKey));

export const setToStorage = (data) =>
  localStorage.setItem(storageKey, JSON.stringify(data));

export const formatPokemon = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight, // gm
    height: pokemon.height, // cm
    baseExperience: pokemon.base_experience,
    types: pokemon.types.map(({ type }) => type.name),
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
