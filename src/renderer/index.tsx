import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main";
import { ThemeProvider } from "@/components/theme-provider";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
