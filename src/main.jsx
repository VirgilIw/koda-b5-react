import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import RickAndMorty from "./pages/RickAndMorty";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
// import Login from "./pages/Login.jsx";
import UserNameProvider from "./contexts/user/UserNameProvider.jsx";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore, { persistedStore } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <PersistGate persistor={persistedStore}>
        <UserNameProvider>
          <BrowserRouter>
            {/* <RickAndMorty /> */}
            <Router />
            {/* <Login /> */}
          </BrowserRouter>
        </UserNameProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
);
