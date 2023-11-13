import { PolicyTermsData } from "../../types/PolicyTermsData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PricacyState {
  loading: boolean;
  error: string;
  privacy: PolicyTermsData | null;
}

const initialState: PricacyState = {
  loading: false,
  error: "",
  privacy: null,
};

export const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchingSuccess(state, action: PayloadAction<PolicyTermsData>) {
      state.loading = false;
      state.privacy = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = privacySlice.actions;

export default privacySlice.reducer;
