import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsContainer from "../../components/questionContainer/QuestionsContainer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loading from "../../components/loading/Loading";
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
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { quiz, errorQuiz, loadingQuiz } = useAppSelector(
    (state) => state.quiz,
  );

  useEffect(() => {
    fetchQuiz()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (quiz) {
      const index = quiz.findIndex(
        (q) => q.category.parent_id === itemParentId && q.id === itemId,
      );
      setCurrentQuizIndex(index);
    }
  }, [quiz, itemId, itemParentId]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const handleCheckAnswers = () => {
    // @ts-ignore
    const allQuestionsAnswered = quiz[currentQuizIndex]?.questions.every(
      // @ts-ignore
      (_, index) => selectedAnswers.hasOwnProperty(index),
    );
    if (allQuestionsAnswered) {
      setShowResults(true);
      setAnswerError(false);
    } else {
      setAnswerError(true);
    }
  };

  const handleNextQuiz = () => {
    if (
      quiz &&
      currentQuizIndex !== null &&
      currentQuizIndex < quiz.length - 1
    ) {
      const nextQuiz = quiz[currentQuizIndex + 1];
      navigate(`/single-page/${nextQuiz.category.parent_id}/${nextQuiz.id}`);
    }
  };

  const handlePrevQuiz = () => {
    if (quiz && currentQuizIndex !== null && currentQuizIndex > 0) {
      const prevQuiz = quiz[currentQuizIndex - 1];
      navigate(`/single-page/${prevQuiz.category.parent_id}/${prevQuiz.id}`);
    }
  };

  return (
    <>
      {errorQuiz && <p>{errorQuiz}</p>}
      {loadingQuiz && <Loading />}
      {quiz && currentQuizIndex !== null && (
        <>
          <div className="container">
            <div className="questions">
              <h1
                className="questions_title"
                dangerouslySetInnerHTML={{
                  __html: quiz[currentQuizIndex].title,
                }}
              ></h1>
              <QuestionsContainer
                questions={quiz[currentQuizIndex]}
                showResults={showResults}
                onAnswerSelect={handleAnswerSelect}
              />
              <div className="view_answer">
                {answerError && (
                  <p className="questions_error">
                    Choose answers for all questions
                  </p>
                )}
                <button
                  onClick={handleCheckAnswers}
                  className="view_answer_btn"
                >
                  CHECK ANSWERS
                </button>
              </div>
              <div className="navigation">
                {currentQuizIndex > 0 && (
                  <button onClick={handlePrevQuiz}>Previous Quiz</button>
                )}
                {currentQuizIndex < quiz.length - 1 && (
                  <button onClick={handleNextQuiz}>Next Quiz</button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
