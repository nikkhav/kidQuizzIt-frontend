import React from "react";
import MySwiper from "./Swiper";
import { dataItem } from "../types/dataItem";
import { dataChanges } from "../types/dataChanges";
import { differenceData } from "../types/DifferenceData";
import { WhyItem } from "../types/whyItem";
import { colouringData } from "../types/colouringData";
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
    <div className="w-full flex-col items-center justify-center">
      {title ? (
        <h2 className="items-center flex-col text-center text-black font-main font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
          <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
        </h2>
      ) : (
        ""
      )}
      <MySwiper data={data} dataChanges={dataChanges} colouring={colouring} />
    </div>
  );
};

export default SwiperComponent;
