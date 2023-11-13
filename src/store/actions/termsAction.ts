import axios from "../../axios";
import { AppDispatch } from "../index";
import { termsSlice } from "../slices/termsSlice";

export const fetchTerms = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(termsSlice.actions.fetching());
      const response = await axios.get("termsandcondition");
      dispatch(termsSlice.actions.fetchingSuccess(response.data[0]));
    } catch (e) {
      dispatch(termsSlice.actions.fechingError(e as Error));
    }
  };
};
