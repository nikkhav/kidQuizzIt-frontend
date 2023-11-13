import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WhyState {
  loadingWhy: boolean;
  errorWhy: string;
  why: any | null;
}

const initialState: WhyState = {
  loadingWhy: false,
  errorWhy: "",
  why: null,
};

export const whySlice = createSlice({
  name: "why",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingWhy = true;
    },
    fetchingSuccess(state, action: PayloadAction<any>) {
      state.loadingWhy = false;
      state.why = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingWhy = false;
      state.errorWhy = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = whySlice.actions;

export default whySlice.reducer;
