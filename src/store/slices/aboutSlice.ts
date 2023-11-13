import { AboutData } from "../../types/AboutData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AboutState {
  loading: boolean;
  error: string;
  about: AboutData | null;
}

const initialState: AboutState = {
  loading: false,
  error: "",
  about: null,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchingSuccess(state, action: PayloadAction<AboutData>) {
      state.loading = false;
      state.about = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = aboutSlice.actions;

export default aboutSlice.reducer;
