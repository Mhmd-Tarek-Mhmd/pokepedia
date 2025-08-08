import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";

import Home from "./Home";
import Layout from "../layout";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

export const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: () => (
    <Layout>
      <Home />
    </Layout>
  ),
});

export default rootRoute.addChildren([homeRoute]);
