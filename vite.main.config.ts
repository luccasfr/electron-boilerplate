import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/app",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
  ],
});
