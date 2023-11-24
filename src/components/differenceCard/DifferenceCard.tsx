import React from "react";
import { Link } from "react-router-dom";
import { differenceData } from "../../types/DifferenceData";
import "./differenceCard.css";

type DifferenceCardProps = {
  item: differenceData;
};
const DifferenceCard: React.FC<DifferenceCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="difference_card"
    >
      <div className="difference_images_card">
        <img src={item.image1} alt="" />
        <img src={item.image1} alt="" />
      </div>
      <h2>{item.title}</h2>
    </Link>
  );
};

export default DifferenceCard;
