import React from "react";
import { quizData } from "../../types/QuizData";
import quizImg from "../../images/quiz.jpg";
import historyCard from "../../images/quiz-history-card.webp";
import animalsCard from "../../images/quiz-animals-card.webp";
import spaceCard from "../../images/quiz-space-card.webp";
import geographyCard from "../../images/quiz-geography-card.webp";
import charactersCard from "../../images/quiz-characters-card.webp";
import { Link } from "react-router-dom";
import "./quizCard.css";

type QuizCardType = {
  item: quizData;
};
const QuizCard: React.FC<QuizCardType> = ({ item }) => {
  const getImageForCategory = (category: number) => {
    if (category === 11) {
      return animalsCard;
    }
    if (category === 12) {
      return charactersCard;
    }
    if (category === 13) {
      return historyCard;
    }
    if (category === 14) {
      return geographyCard;
    }
    if (category === 15) {
      return spaceCard;
    } else {
      return quizImg;
    }
  };
  return (
    <Link
      // to={`/single-page/${item.category.parent_id}/${item.id}`}
      to={`/catalog/${item.category.parent_id}/${item.category.id}`}
      className="quiz_card"
    >
      <img
        src={getImageForCategory(item.category.id)}
        alt={item.category.title}
      />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default QuizCard;
