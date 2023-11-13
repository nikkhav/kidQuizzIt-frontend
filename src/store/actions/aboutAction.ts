import axios from "../../axios";
import { AppDispatch } from "../index";
import { aboutSlice } from "../slices/aboutSlice";

export const fetchAbout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(aboutSlice.actions.fetching());
      const response = await axios.get("about");
      dispatch(aboutSlice.actions.fetchingSuccess(response.data[0]));
    } catch (e) {
      dispatch(aboutSlice.actions.fechingError(e as Error));
    }
  };
};
