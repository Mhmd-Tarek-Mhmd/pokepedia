import React from "react";

const STORAGE_KEY = 'favourites';

const useFavourites = () => {
  const [favourites, setFavourites] = React.useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  const append = (fav) => {
    const newFavourites = [...favourites, fav];
    setFavourites(newFavourites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
  }

  const remove = (fav) => {
    const newFavourites = favourites?.filter(favourite => favourite?.id !== fav?.id);
    setFavourites(newFavourites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
  }

  const toggle = (fav) => {
    const isExist = Boolean(favourites?.find(favourite => favourite?.id === fav.id));
    if (isExist) remove(fav);
    else append(fav);
  }

  const clear = () => {
    setFavourites([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    favourites,
    append,
    remove,
    toggle,
    clear,
  }
}

export default useFavourites;