import axios from "../../axios";
import { AppDispatch } from "../index";
import { privacySlice } from "../slices/privacySlice";

export const fetchPrivacy = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(privacySlice.actions.fetching());
      const response = await axios.get("privacyandpolicy");
      dispatch(privacySlice.actions.fetchingSuccess(response.data[0]));
    } catch (e) {
      dispatch(privacySlice.actions.fechingError(e as Error));
    }
  };
};
