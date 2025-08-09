import { FavouritesProvider } from "./favourites.jsx";

export { default as FavouritesContext } from "./favourites.jsx";

const providers = [FavouritesProvider];

const ContextsProvider = ({ children }) => {
  return providers.map((Provider, i) => <Provider key={i}>{children}</Provider>);
}

export default ContextsProvider;