// import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./Slices/userSlice";
import ProductSlice from "./Slices/ProductSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appStateSlice from "./Slices/appStateSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // Only persist the "user" slice
};

const rootReducer = combineReducers({
  user: userSlice,
  product: ProductSlice,
  appState:appStateSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
