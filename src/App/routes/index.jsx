import { createRootRoute, createRoute } from "@tanstack/react-router";

import Home from "./Home";
import Root from "./__root";
import Pokemon from "./Pokemon";
import NotFound from "./NotFound";
import Favourites from "./Favourites";

const rootRoute = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
})

export const homeRoute = createRoute({
  path: '/',
  component: Home,
  getParentRoute: () => rootRoute,
});

export const favouritesRoute = createRoute({
  path: '/favourites',
  component: Favourites,
  getParentRoute: () => rootRoute,
});

export const pokemonRoute = createRoute({
  path: '/pokemon/$pokemonId',
  component: Pokemon,
  getParentRoute: () => rootRoute,
});

export default rootRoute.addChildren([homeRoute, favouritesRoute, pokemonRoute]);
