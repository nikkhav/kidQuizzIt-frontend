import React from "react";
import MySwiper from "../swiper/Swiper";
import { differenceData } from "../../types/DifferenceData";
import { WhyItem } from "../../types/whyItem";
import { colouringData } from "../../types/colouringData";
import "./swiperComponent.css";

type SwiperComponentProps = {
  title: string | null;
  data?: WhyItem[] | null;
  dataChanges?: differenceData[] | null;
  colouring?: colouringData[] | null;
};
const SwiperComponent: React.FC<SwiperComponentProps> = ({
  title,
  dataChanges,
  data,
  colouring,
}) => {
  return (
    <div className="swiper_component">
      {title ? (
        <div className="container">
          <h2 className="swiper_title">{title}</h2>
        </div>
      ) : (
        ""
      )}
      <MySwiper data={data} dataChanges={dataChanges} colouring={colouring} />
    </div>
  );
};

export default SwiperComponent;
