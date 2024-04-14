import React from "react";
import { Link } from "react-router-dom";
import { WhyItem } from "../../types/whyItem";
import "./whyCard.css";

type WhyCardProps = {
  item: WhyItem;
};
const WhyCard: React.FC<WhyCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="category_card"
    >
      <img src={item.image} alt="" />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default WhyCard;
