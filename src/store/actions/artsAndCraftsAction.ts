import axios from "../../axios";
import { AppDispatch } from "../index";
import { artsAndCraftsSlice } from "../slices/artsAndCraftsSlice";

export const fetchArtsAndCrafts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(artsAndCraftsSlice.actions.fetching());
      const response = await axios.get("arts_and_crafts");
      dispatch(artsAndCraftsSlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(artsAndCraftsSlice.actions.fechingError(e as Error));
    }
  };
};
