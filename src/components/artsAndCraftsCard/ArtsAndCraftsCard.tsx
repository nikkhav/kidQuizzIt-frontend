import React from "react";
import { ArtsAndCraftsData } from "../../types/ArtsAndCraftsData";
import "./artsAndCraftsCard.css";
import { Link } from "react-router-dom";

type ArtsAndCraftCardProps = {
  item: ArtsAndCraftsData;
};

const ArtsAndCraftCard: React.FC<ArtsAndCraftCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="arts_and_crafts_card"
    >
      <img src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default ArtsAndCraftCard;
