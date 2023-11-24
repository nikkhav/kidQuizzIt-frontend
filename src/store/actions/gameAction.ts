import axios from "../../axios";
import { AppDispatch } from "../index";
import { gameSlice } from "../slices/gameSlice";

export const fetchGame = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(gameSlice.actions.fetching());
      const response = await axios.get("game");
      dispatch(gameSlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(gameSlice.actions.fechingError(e as Error));
    }
  };
};
