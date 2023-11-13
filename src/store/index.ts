import { configureStore, combineReducers, Store } from "@reduxjs/toolkit";
import aboutReducer from "./slices/aboutSlice";
import privacyReducer from "./slices/privacySlice";
import termsReducer from "./slices/termsSlice";

const rootReducer = combineReducers({
  about: aboutReducer,
  privacy: privacyReducer,
  terms: termsReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = Store["dispatch"];
