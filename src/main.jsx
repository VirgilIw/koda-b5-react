import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RickAndMorty from "./pages/RickAndMorty";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <>
        {/* <RickAndMorty /> */}
        <Router />
      </>
    </BrowserRouter>
  </StrictMode>
);
