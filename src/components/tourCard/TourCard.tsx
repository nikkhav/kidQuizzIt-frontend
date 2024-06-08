import React from "react";
import { gameData } from "../../types/gameData";
import styles from "./tourCard.module.css";
import { Link } from "react-router-dom";

type GameCardProps = {
  item: gameData;
};
const TourCard: React.FC<GameCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className={styles.tour_card}
    >
      <img src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default TourCard;
