import { createSlice } from "@reduxjs/toolkit";
import { setCatVariable } from "../actions/catAction";

interface catState {
  selectedCat: number | null;
}

const initialState: catState = {
  selectedCat: null,
};

export const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCat(state, action) {
      state.selectedCat = action.payload;
    },
  },
});

export const { setCat } = catSlice.actions;

export default catSlice.reducer;
