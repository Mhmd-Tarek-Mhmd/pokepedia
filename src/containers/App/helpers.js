const storageKey = "poképedia";
export const getFromStorage = () =>
  JSON.parse(localStorage.getItem(storageKey));
export const setToStorage = (data) =>
  localStorage.setItem(storageKey, JSON.stringify(data));

const getAbilities = async (pokemon) => {
  return await Promise.all(
    pokemon.abilities.map(async ({ ability: { name, url } }) => {
      const res = await fetch(url);
      const data = await res.json();
      const desc = data.flavor_text_entries.filter(
        ({ language }) => language.name === "en"
      )[0].flavor_text;

      return { name, desc };
    })
  );
};
export const pokemonFormat = async (pokemon) => {
  const abilities = await getAbilities(pokemon);

  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight, // gm
    height: pokemon.height, // cm
    abilities,
    types: pokemon.types.map(({ type }) => type.name),
    frontImage:
      pokemon.sprites.other.dream_world.front_default ||
      pokemon.sprites.front_default,
  };
};
export async function getPageData(data, page = 1, count = 20) {
  const paginationData = {
    page,
    count,
    total: data.length,
    lastPage: Math.ceil(data.length / count),
  };

  const pageData = data.filter((p, i) => {
    const max = count * page;
    return i >= max - count && i < max;
  });
  const pokemonData = await Promise.all(
    pageData.map(async (obj) => {
      const res = await fetch(obj.url);
      const data = await res.json();
      const pokemon = await pokemonFormat(data);
      return pokemon;
    })
  );

  return {
    pagination: paginationData,
    pokemon: pokemonData,
  };
}
