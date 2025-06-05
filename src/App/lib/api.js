const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async (limit = 20, offset = 0) => {
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return await res.json();
}

export const getPokemon = async (id) => {
  const res = await fetch(`${API_URL}/pokemon/${id}`);
  return res.json();
}
