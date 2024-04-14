import React from "react";
import { gameData } from "../../types/gameData";
import "./gameCard.css";
import { Link } from "react-router-dom";

type GameCardProps = {
  item: gameData;
};
const GameCard: React.FC<GameCardProps> = ({ item }) => {
  return (
    <Link
      // to={`/single-page/${item.category.parent_id}/${item.id}`}
      to={`/catalog/${item.category.parent_id}/${item.category.id}`}
      className="game_card"
    >
      <img src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default GameCard;
