import { PolicyTermsData } from "../../types/PolicyTermsData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface termsState {
  loading: boolean;
  error: string;
  terms: PolicyTermsData | null;
}

const initialState: termsState = {
  loading: false,
  error: "",
  terms: null,
};

export const termsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchingSuccess(state, action: PayloadAction<PolicyTermsData>) {
      state.loading = false;
      state.terms = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = termsSlice.actions;

export default termsSlice.reducer;
