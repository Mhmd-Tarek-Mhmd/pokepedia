const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (limit = 20, offset = 0) => {
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return await res.json();
}

export const getPokemon = async (id) => {
  const res = await fetch(`${API_URL}/pokemon/${id}`);
  const data = await res.json();

  const speciesRes = await fetch(data?.species?.url);
  const species = await speciesRes.json();

  const abilities = await Promise.all(
    data?.abilities.map(async (a) => {
      const res = await fetch(a?.ability?.url);
      return await res.json();
    })
  );

  return { ...data, species, abilities };
}
