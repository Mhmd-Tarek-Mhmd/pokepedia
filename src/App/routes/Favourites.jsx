import { useFavourites } from "../hooks";

import { XIcon } from "../components/ui";
import Section from "../layouts/Section";
import { FavouritesList } from "../containers";

const Favourites = () => {
  const { favourites, clear } = useFavourites();

  return (
    <Section title="Favourite Pokémon">
      {favourites?.length ? (
        <>
          <button
            type="button"
            onClick={clear}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors mb-4 cursor-pointer"
          >
            <XIcon />
            <span>Clear All Favorites</span>
          </button>
          <FavouritesList favourites={favourites}/>
        </>
      ) : (
        <p role="alert" className="alert">
          You haven't added any Pokémon to your favourites yet. Click the heart icon on a Pokémon to add it to your favourites.
        </p>
      )}
    </Section>
  );
};

export default Favourites;
