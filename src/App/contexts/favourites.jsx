import React, { createContext, useState } from 'react';

const STORAGE_KEY = 'favourites';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  // Methods that update both state and localStorage
  const append = (fav) => {
    const newFavourites = [...favourites, fav];
    setFavourites(newFavourites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
  };

  const remove = (fav) => {
    const newFavourites = favourites.filter(favourite => favourite.id !== fav.id);
    setFavourites(newFavourites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavourites));
  };

  const toggle = (fav) => {
    const isExist = Boolean(favourites.find(favourite => favourite.id === fav.id));
    if (isExist) remove(fav);
    else append(fav);
  };

  const clear = () => {
    setFavourites([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, append, remove, toggle, clear }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
