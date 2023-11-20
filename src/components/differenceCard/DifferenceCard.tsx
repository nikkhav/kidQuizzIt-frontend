import React from "react";
import { Link } from "react-router-dom";
import { differenceData } from "../../types/DifferenceData";
import "./differenceCard.css"

type DifferenceCardProps = {
  item: differenceData;
};
const DifferenceCard: React.FC<DifferenceCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="difference_card"
    >
      <img
        src={item.image1}
        alt=""
      />
      <img
        src={item.image1}
        alt=""
      />
    </Link>
  );
};

export default DifferenceCard;
