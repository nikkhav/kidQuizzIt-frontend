import axios from "../../axios";
import { AppDispatch } from "../index";
import { categorySlice } from "../slices/categorySlice";

export const fetchCategory = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(categorySlice.actions.fetching());
      const response = await axios.get("category");
      dispatch(categorySlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(categorySlice.actions.fechingError(e as Error));
    }
  };
};
