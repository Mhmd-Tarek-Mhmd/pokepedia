import { createRouter, RouterProvider } from '@tanstack/react-router'

import routeTree from "./routes";
import Contexts from "./contexts";

const router = createRouter({ routeTree })

export default function App() {
  return (
    <Contexts>
      <RouterProvider router={router} />
    </Contexts>
  )
}
