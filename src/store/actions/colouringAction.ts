import axios from "../../axios";
import { AppDispatch } from "../index";
import { colouringSlice } from "../slices/colouringSlice";

export const fetchColouring = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(colouringSlice.actions.fetching());
      const response = await axios.get("colouring");
      dispatch(colouringSlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(colouringSlice.actions.fechingError(e as Error));
    }
  };
};
