import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameData } from "../../types/gameData";

interface GameState {
  loadingGame: boolean;
  errorGame: string;
  game: gameData[] | null;
}

const initialState: GameState = {
  loadingGame: false,
  errorGame: "",
  game: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingGame = true;
    },
    fetchingSuccess(state, action: PayloadAction<gameData[]>) {
      state.loadingGame = false;
      state.game = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingGame = false;
      state.errorGame = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = gameSlice.actions;

export default gameSlice.reducer;
