import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./pages/App";
import Products from "./pages/Products";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Products />
    {/* <App /> */}
  </StrictMode>
);
