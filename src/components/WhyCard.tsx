import React from "react";
import { Link } from "react-router-dom";
import { WhyItem } from "../types/whyItem";

type WhyCardProps = {
  item: WhyItem;
};
const WhyCard: React.FC<WhyCardProps> = ({ item }) => {
  return (
    <Link to="/catalog" className="inline-block w-full h-96 flex-col items-start justify-start border-2 border-gray rounded-lg overflow-hidden">
      <img src={item.image} alt="" className="w-full object-cover h-4/5" />
      <h2 className="swiper_text">{item.title}</h2>
    </Link>
  );
};

export default WhyCard;
