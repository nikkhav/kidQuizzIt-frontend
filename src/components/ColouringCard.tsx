import React from "react";
import { Link } from "react-router-dom";
import { colouringData } from "../types/colouringData";

type ColouringCardProps = {
  item: colouringData;
};
const ColouringCard: React.FC<ColouringCardProps> = ({ item }) => {
  return (
    <Link to="/catalog" className="">
      <img className="w-full h-96 object-cover border-2 border-gray rounded-lg overflow-hidden" src={item.image} alt="" />
    </Link>
  );
};

export default ColouringCard;
