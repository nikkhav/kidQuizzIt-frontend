import React from "react";
import { quizData } from "../types/QuizData";
import quizImg from "../images/quiz.jpg";
import { Link } from "react-router-dom";

type QuizCardType = {
  item: quizData;
};
const QuizCard: React.FC<QuizCardType> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="inline-block w-full h-96 flex-col items-start justify-start border-2 border-gray rounded-lg overflow-hidden"
    >
      <img src={quizImg} alt="" className="w-full h-4/5 object-cover " />
      <h2 className="ml-3 mt-2 text-lg font-main font-medium text-black">
        {item.title}
      </h2>
    </Link>
  );
};

export default QuizCard;
