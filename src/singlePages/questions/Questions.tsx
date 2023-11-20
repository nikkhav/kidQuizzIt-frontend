import React, { useEffect, useState } from "react";
import QuestionsContainer from "../../components/questionContainer/QuestionsContainer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loading from "../../components/loading/Loading";
import { quizData } from "../../types/QuizData";
import { fetchQuiz } from "../../store/actions/quizAction";
import "./questions.css";

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
    const allQuestionsAnswered = currentItem?.questions.every((_, index) =>
      selectedAnswers.hasOwnProperty(index)
    );
    if (allQuestionsAnswered) {
      setShowResults(true);
      setAnswerError(false);
    } else {
      setAnswerError(true);
    }
  };
  return (
    <>
      {errorQuiz && <p>{errorQuiz}</p>}
      {loadingQuiz && <Loading />}
      {quiz && currentItem && (
        <>
          <div className="container">
            <div className="questions">
              <h1 className="questions_title">{currentItem.title}</h1>
              <QuestionsContainer
                questions={currentItem}
                showResults={showResults}
                onAnswerSelect={handleAnswerSelect}
              />
              <div className="view_answer">
                {answerError && (
                  <p className="questions_error">
                    Choose answers for the all questions
                  </p>
                )}
                <button
                  onClick={handleCheckAnswers}
                  className="view_answer_btn"
                >
                  CHECK ANSWERS
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
