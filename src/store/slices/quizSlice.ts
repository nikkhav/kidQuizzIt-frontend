import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quizData } from "../../types/QuizData";

interface QuizState {
  loadingQuiz: boolean;
  errorQuiz: string;
  quiz: quizData[] | null;
}

const initialState: QuizState = {
  loadingQuiz: false,
  errorQuiz: "",
  quiz: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetching(state) {
      state.loadingQuiz = true;
    },
    fetchingSuccess(state, action: PayloadAction<quizData[]>) {
      state.loadingQuiz = false;
      state.quiz = action.payload;
    },
    fechingError(state, action: PayloadAction<Error>) {
      state.loadingQuiz = false;
      state.errorQuiz = action.payload.message;
    },
  },
});

export const { fetching, fetchingSuccess, fechingError } = quizSlice.actions;

export default quizSlice.reducer;
