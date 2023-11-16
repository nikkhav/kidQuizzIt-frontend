import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import QuestionsContainer from "../components/QuestionsContainer";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Loading from "../components/Loading";
import { quizData } from "../types/QuizData";
import { fetchQuiz } from "../store/actions/quizAction";

type QuestionsProps = {
  itemId: number;
  itemParentId: number;
};
const Questions: React.FC<QuestionsProps> = ({ itemId, itemParentId }) => {
  // -----------------------
  const dispatch = useAppDispatch();
  const { quiz, errorQuiz, loadingQuiz } = useAppSelector(
    (state) => state.quiz
  );
  useEffect(() => {
    fetchQuiz()(dispatch);
  }, [dispatch]);
  const currentItem: quizData | undefined = quiz?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  return (
    <>
      {errorQuiz && <p>{errorQuiz}</p>}
      {loadingQuiz && <Loading />}
      {quiz && currentItem && (
        <>
          <Wrapper>
            <h1 className="w-full my-16 sm:text-5xl md:text-6xl mx-auto text-center text-4xl font-main font-semibold">
              {currentItem.title}
              <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
            </h1>
            <QuestionsContainer questions={currentItem} />
            <div className="w-full flex items-center justify-center mt-8 mb-16 md:mt-16">
              <button className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 md:py-4 md:px-8 font-main font-medium text-white text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-darkGreen hover:border-darkGreen">
                CHECK ANSWERS
              </button>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Questions;
