import React from "react";

import { FavouritesContext } from "../contexts";

export const useFavourites = () => React.useContext(FavouritesContext);

export default useFavourites;