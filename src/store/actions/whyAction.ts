import axios from "../../axios";
import { AppDispatch } from "../index";
import { whySlice } from "../slices/whySlice";

export const fetchWhy = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(whySlice.actions.fetching());
      const response = await axios.get("whyquestion");
      dispatch(whySlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(whySlice.actions.fechingError(e as Error));
    }
  };
};
