import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "../routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

// Create a new router instance
const router = createRouter({ routeTree, history: memoryHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function Main() {
  return <RouterProvider router={router} />;
}
