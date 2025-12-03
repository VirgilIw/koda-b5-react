import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/Heading.jsx";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Router />
    </BrowserRouter>
  </StrictMode>
);
