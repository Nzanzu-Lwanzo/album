import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppContextProvider } from "./contexts/app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
