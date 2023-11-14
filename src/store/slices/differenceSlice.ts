import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { differenceData } from "../../types/DifferenceData";

interface DifferenceState {
  loadingDifference: boolean;
  errorDifference: string;
  difference: differenceData[] | null;
}

const initialState: DifferenceState = {
  loadingDifference: false,
  errorDifference: "",
  difference: null,
};

export const differenceSlice = createSlice({
  name: "difference",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingDifference = true;
    },
    fetchingSuccess(state, action: PayloadAction<differenceData[]>) {
      state.loadingDifference = false;
      state.difference = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingDifference = false;
      state.errorDifference = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } =
  differenceSlice.actions;

export default differenceSlice.reducer;
