import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colouringData } from "../../types/colouringData";

interface ColouringState {
  loadingColouring: boolean;
  errorColouring: string;
  colouring: colouringData[] | null;
}

const initialState: ColouringState = {
  loadingColouring: false,
  errorColouring: "",
  colouring: null,
};

export const colouringSlice = createSlice({
  name: "colouring",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingColouring = true;
    },
    fetchingSuccess(state, action: PayloadAction<colouringData[]>) {
      state.loadingColouring = false;
      state.colouring = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingColouring = false;
      state.errorColouring = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } =
  colouringSlice.actions;

export default colouringSlice.reducer;
