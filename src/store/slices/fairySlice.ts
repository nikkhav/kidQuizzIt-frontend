import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fairyData } from "../../types/fairyData";

interface FairyState {
  loadingFairy: boolean;
  errorFairy: string;
  fairy: fairyData[] | null;
}

const initialState: FairyState = {
  loadingFairy: false,
  errorFairy: "",
  fairy: null,
};

export const fairySlice = createSlice({
  name: "fairy",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingFairy = true;
    },
    fetchingSuccess(state, action: PayloadAction<fairyData[]>) {
      state.loadingFairy = false;
      state.fairy = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingFairy = false;
      state.errorFairy = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = fairySlice.actions;

export default fairySlice.reducer;
