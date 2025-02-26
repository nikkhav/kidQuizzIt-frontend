import { configureStore, combineReducers, Store } from "@reduxjs/toolkit";
import aboutReducer from "./slices/aboutSlice";
import privacyReducer from "./slices/privacySlice";
import termsReducer from "./slices/termsSlice";
import differenceReducer from "./slices/differenceSlice";
import categoryReducer from "./slices/categorySlice";
import whyReducer from "./slices/whySlice";
import colouringReducer from "./slices/colouringSlice";
import quizReducer from "./slices/quizSlice";
import catReducer from "./slices/catSlice";
import fairyReducer from "./slices/fairySlice";
import gameReducer from "./slices/gameSlice";
import artsAndCraftsReducer from "./slices/artsAndCraftsSlice";

const rootReducer = combineReducers({
  about: aboutReducer,
  privacy: privacyReducer,
  terms: termsReducer,
  difference: differenceReducer,
  category: categoryReducer,
  why: whyReducer,
  colouring: colouringReducer,
  quiz: quizReducer,
  cat: catReducer,
  fairy: fairyReducer,
  game: gameReducer,
  artsAndCrafts: artsAndCraftsReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = Store["dispatch"];
