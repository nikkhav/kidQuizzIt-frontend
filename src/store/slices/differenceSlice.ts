import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { differenceData } from "../../types/DifferenceData";

interface DifferenceState {
  loading: boolean;
  error: string;
  difference: differenceData[] | null;
}

const initialState: DifferenceState = {
  loading: false,
  error: "",
  difference: null,
};

export const differenceSlice = createSlice({
  name: "difference",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchingSuccess(state, action: PayloadAction<differenceData[]>) {
      state.loading = false;
      state.difference = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } =
  differenceSlice.actions;

export default differenceSlice.reducer;
