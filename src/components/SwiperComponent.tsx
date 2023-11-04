import React from "react";
import MySwiper from "./Swiper";

type dataItem = {
  id: number;
  img: string;
  text: string;
};
type dataChanges = {
  id: number;
  img1: string;
  img2: string;
};
type SwiperComponentProps = {
  title: string | null;
  data?: dataItem[];
  dataChanges?: dataChanges[];
};
const SwiperComponent: React.FC<SwiperComponentProps> = ({
  title,
  dataChanges,
  data,
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
      <MySwiper data={data} dataChanges={dataChanges} />
    </div>
  );
};

export default SwiperComponent;
