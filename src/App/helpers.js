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
      const desc = data?.flavor_text_entries.filter(
        ({ language }) => language.name === "en"
      )?.[0]?.flavor_text;

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
      pokemon.sprites?.other.dream_world?.front_default ||
      pokemon.sprites?.front_default ||
      pokemon.sprites?.other?.["official-artwork"]?.front_default,
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

export const getPageRange = (totalPageCount, currentPage, siblingCount = 1) => {
  const DOTS = "dots";
  const totalPageNumbers = siblingCount + 5;
  const noDotsSideCount = 3 + 2 * siblingCount;
  const getRange = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  );
  const isShowLeftDots = leftSiblingIndex > 2;
  const isShowRightDots = rightSiblingIndex < totalPageCount - 2;

  // Case 1: If the number of pages is less than the page numbers we want to show
  if (totalPageNumbers >= totalPageCount) return getRange(1, totalPageCount);

  // Case 2: No left dots to show, but rights dots to be shown
  if (!isShowLeftDots && isShowRightDots) {
    let leftRange = getRange(1, noDotsSideCount);
    return [...leftRange, DOTS, totalPageCount];
  }

  // Case 3: No right dots to show, but left dots to be shown
  if (isShowLeftDots && !isShowRightDots) {
    let rightRange = getRange(
      totalPageCount - noDotsSideCount + 1,
      totalPageCount
    );
    return [1, DOTS, ...rightRange];
  }

  // Case 4: Both left and right dots to be shown
  if (isShowLeftDots && isShowRightDots) {
    let middleRange = getRange(leftSiblingIndex, rightSiblingIndex);
    return [1, DOTS, ...middleRange, DOTS, totalPageCount];
  }
};
