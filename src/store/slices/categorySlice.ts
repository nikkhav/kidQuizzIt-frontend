import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryData } from "../../types/categoryData";

interface CategoryState {
  loadingCategory: boolean;
  errorCategory: string;
  category: categoryData[] | null;
}

const initialState: CategoryState = {
  loadingCategory: false,
  errorCategory: "",
  category: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingCategory = true;
    },
    fetchingSuccess(state, action: PayloadAction<categoryData[]>) {
      state.loadingCategory = false;
      state.category = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingCategory = false;
      state.errorCategory = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } =
  categorySlice.actions;

export default categorySlice.reducer;
