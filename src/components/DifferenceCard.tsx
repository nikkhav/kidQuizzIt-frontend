import React from "react";
import { Link } from "react-router-dom";
import { differenceData } from "../types/DifferenceData";

type DifferenceCardProps = {
  item: differenceData;
};
const DifferenceCard: React.FC<DifferenceCardProps> = ({ item }) => {
  return (
    <Link
      to={`/single-page/${item.category.parent_id}/${item.id}`}
      className="inline-block h-96 w-full rounded-lg overflow-hidden"
    >
      <img
        className="w-full border-2 border-gray object-cover h-1/2"
        src={item.image1}
        alt=""
      />
      <img
        className="w-full border-2 border-gray object-cover h-1/2"
        src={item.image1}
        alt=""
      />
    </Link>
  );
};

export default DifferenceCard;
