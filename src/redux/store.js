import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos.slice";
import smokerReducer from "./slices/smoker.slice";
import productReducer from "./slices/product.slice";
import storage from "redux-persist/lib/storage";
import {
  persistCombineReducers,
  persistStore,
  PERSIST,
  REHYDRATE,
  FLUSH,
  REGISTER,
  PURGE,
} from "redux-persist";

const persistConfig = {
  key: "products",
  storage,
};
const persistedReducer = persistCombineReducers(persistConfig, {
  todos: todosReducer,
  smoker: smokerReducer,
  product: productReducer,
});

const store = configureStore({
  // satu reducer atau satu parent
  // kalau banyak pakai combineReducers()
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, REGISTER, PURGE],
      },
    }),
  // reducer:{
  //   todos: todosReducer,
  //   smoker: smokerReducer,
  //   product: productReducer,
  // },
});

export const persistedStore = persistStore(store);
export default store;
