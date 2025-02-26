import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArtsAndCraftsData } from "../../types/ArtsAndCraftsData";

interface ArtsAndCraftsState {
  loadingArtsAndCrafts: boolean;
  errorArtsAndCrafts: string;
  artsAndCrafts: ArtsAndCraftsData[] | null;
}

const initialState: ArtsAndCraftsState = {
  loadingArtsAndCrafts: false,
  errorArtsAndCrafts: "",
  artsAndCrafts: null,
};

export const artsAndCraftsSlice = createSlice({
  name: "artsAndCrafts",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingArtsAndCrafts = true;
    },
    fetchingSuccess(state, action: PayloadAction<ArtsAndCraftsData[]>) {
      state.loadingArtsAndCrafts = false;
      state.artsAndCrafts = action.payload;
    },
    fetchingError(state, action: PayloadAction<Error>) {
      state.loadingArtsAndCrafts = false;
      state.errorArtsAndCrafts = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fetchingError } =
  artsAndCraftsSlice.actions;

export default artsAndCraftsSlice.reducer;
