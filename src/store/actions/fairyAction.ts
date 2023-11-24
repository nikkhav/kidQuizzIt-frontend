import axios from "../../axios";
import { AppDispatch } from "../index";
import { fairySlice } from "../slices/fairySlice";

export const fetchFairy = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fairySlice.actions.fetching());
      const response = await axios.get("tale");
      dispatch(fairySlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(fairySlice.actions.fechingError(e as Error));
    }
  };
};
