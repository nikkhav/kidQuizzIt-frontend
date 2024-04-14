import React from "react";
import { fairyData } from "../../types/fairyData";
import "./tale.css";
import { Link } from "react-router-dom";

type TaleCardProps = {
  item: fairyData;
};
const TaleCard: React.FC<TaleCardProps> = ({ item }) => {
  return (
    <Link
      // to={`/single-page/${item.category.parent_id}/${item.id}`}
      to={`/catalog/${item.category.parent_id}/${item.category.id}`}
      className="tale_card"
    >
      <img src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default TaleCard;
