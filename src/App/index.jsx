import { createRouter, RouterProvider } from '@tanstack/react-router'

import routeTree from "./routes";

const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
