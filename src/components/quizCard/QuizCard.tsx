import React from "react";
import { quizData } from "../../types/QuizData";
import quizImg from "../../images/quiz.jpg";
import { Link } from "react-router-dom";
import "./quizCard.css";

type QuizCardType = {
  item: quizData;
};
const QuizCard: React.FC<QuizCardType> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="quiz_card"
    >
      <img src={quizImg} alt="" />
      <h2>{item.title}</h2>
    </Link>
  );
};

export default QuizCard;
