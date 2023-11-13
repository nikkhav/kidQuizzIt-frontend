import axios from "../../axios";
import { AppDispatch } from "../index";
import { differenceSlice } from "../slices/differenceSlice";

export const fetchDifference = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(differenceSlice.actions.fetching());
      const response = await axios.get("difference");
      dispatch(differenceSlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(differenceSlice.actions.fechingError(e as Error));
    }
  };
};
