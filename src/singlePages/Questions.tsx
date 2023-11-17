import React, { useEffect, useState } from "react";
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
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [answerError, setAnswerError] = useState<boolean>(false);
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
  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answerIndex,
    }));
  };
  const handleCheckAnswers = () => {
    // Проверка, выбраны ли ответы для каждого вопроса
    const allQuestionsAnswered = currentItem?.questions.every((_, index) =>
      selectedAnswers.hasOwnProperty(index)
    );
    if (allQuestionsAnswered) {
      setShowResults(true);
      setAnswerError(false);
      // Дополнительная логика для проверки правильных ответов и установки стилей
    } else {
      // Вывести сообщение пользователю, что нужно выбрать ответ на каждый вопрос
      setAnswerError(true);
    }
  };
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
            <QuestionsContainer
              questions={currentItem}
              showResults={showResults}
              onAnswerSelect={handleAnswerSelect}
            />
            <div className="w-full flex flex-col items-center justify-center mt-8 mb-16 md:mt-16">
              {answerError && (
                <p className="text-center text-lg font-main font-medium text-error mb-10">
                  Choose answers for the all questions
                </p>
              )}
              <button
                onClick={handleCheckAnswers}
                className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 md:py-4 md:px-8 font-main font-medium text-white text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-darkGreen hover:border-darkGreen"
              >
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
