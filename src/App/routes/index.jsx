import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";

import Home from "./Home";
import Layout from "../layouts";
import Pokemon from "./Pokemon";
import Favourites from "./Favourites";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})

export const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: () => <Home />,
});

export const favouritesRoute = createRoute({
  path: '/favourites',
  component: () => <Favourites />,
  getParentRoute: () => rootRoute,
});

export const pokemonRoute = createRoute({
  path: '/pokemon/$pokemonId',
  component: () => <Pokemon />,
  getParentRoute: () => rootRoute,
});

export default rootRoute.addChildren([homeRoute, favouritesRoute, pokemonRoute]);
