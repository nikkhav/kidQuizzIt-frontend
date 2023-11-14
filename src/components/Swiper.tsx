import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import swiperImg1 from "../images/swiper1.avif";
import Wrapper from "./Wrapper";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { dataItem } from "../types/dataItem";
import { dataChanges } from "../types/dataChanges";
import { differenceData } from "../types/DifferenceData";
import { WhyItem } from "../types/whyItem";
import { colouringData } from "../types/colouringData";
import ColouringCard from "./colouringCard";
import DifferenceCard from "./DifferenceCard";
import WhyCard from "./WhyCard";
type MySwiperProps = {
  data?: WhyItem[] | null;
  dataChanges?: differenceData[] | null;
  colouring?: colouringData[] | null;
};
type CardCountMap = {
  [key: string]: number;
};
const MySwiper: React.FC<MySwiperProps> = ({
  data,
  dataChanges,
  colouring,
}) => {
  const cardCounts: CardCountMap = {
    "(max-width: 400px)": 1,
    "(max-width: 480px)": 2,
    "(max-width: 991px)": 3,
    "(min-width: 992px)": 4,
  };

  const [currentCardCount, setCurrentCardCount] = useState<number>(4);

  useEffect(() => {
    const handleMediaChange = () => {
      for (const mediaQuery in cardCounts) {
        if (window.matchMedia(mediaQuery).matches) {
          setCurrentCardCount(cardCounts[mediaQuery]);
          break;
        }
      }
    };

    window.addEventListener("resize", handleMediaChange);

    handleMediaChange();

    return () => {
      window.removeEventListener("resize", handleMediaChange);
    };
  }, []);
  return (
    <>
      {data && (
        <Wrapper>
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <WhyCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Wrapper>
      )}
      {dataChanges && (
        <Wrapper>
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {dataChanges.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <DifferenceCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Wrapper>
      )}
      {colouring && (
        <Wrapper>
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {colouring.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ColouringCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Wrapper>
      )}
    </>
  );
};
export default MySwiper;
