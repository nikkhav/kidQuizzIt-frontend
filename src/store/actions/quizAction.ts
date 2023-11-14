import axios from "../../axios";
import { AppDispatch } from "../index";
import { quizSlice } from "../slices/quizSlice";

export const fetchQuiz = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(quizSlice.actions.fetching());
      const response = await axios.get("quiz");
      dispatch(quizSlice.actions.fetchingSuccess(response.data));
    } catch (e) {
      dispatch(quizSlice.actions.fechingError(e as Error));
    }
  };
};
