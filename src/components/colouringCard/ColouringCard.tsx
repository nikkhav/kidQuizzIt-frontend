import React from "react";
import { Link } from "react-router-dom";
import { colouringData } from "../../types/colouringData";
import "./colouringCard.css";

type ColouringCardProps = {
  item: colouringData;
};
const ColouringCard: React.FC<ColouringCardProps> = ({ item }) => {
  return (
    <Link
      // to={`/single-page/${item.category.parent_id}/${item.id}`}
      to={`/catalog/${item.category.parent_id}/${item.category.id}`}
      className="colouring_card"
    >
      <img className="" src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default ColouringCard;
