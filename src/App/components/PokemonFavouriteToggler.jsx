import { useFavourites } from "../hooks";

import clsx from "clsx";

import { FilledHeartIcon, HeartIcon } from "./ui";

function PokemonFavouriteToggler({ pokemon, className }) {
  const { favourites, toggle } = useFavourites();
  const isFavourite = Boolean(favourites.find(fav => fav.id === pokemon.id));

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(pokemon);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
      className={clsx("icon-btn cursor-pointer text-black dark:text-white", className)}
    >
      {isFavourite ? <FilledHeartIcon /> : <HeartIcon />}
    </button>
  );
}

export default PokemonFavouriteToggler;
