import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { differenceData } from "../../types/DifferenceData";
import { WhyItem } from "../../types/whyItem";
import { colouringData } from "../../types/colouringData";
import ColouringCard from "../colouringCard/ColouringCard";
import DifferenceCard from "../differenceCard/DifferenceCard";
import WhyCard from "../whyCard/WhyCard";
import "./swiper.css";

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
    "(max-width: 480px)": 1,
    "(max-width: 760px)": 2,
    "(max-width: 1200px)": 3,
    "(min-width: 1200px)": 4,
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

  const spaceCounts: CardCountMap = {
    "(max-width: 400px)": 20,
    "(max-width: 760px)": 20,
    "(max-width: 1200px)": 30,
    "(min-width: 1200px)": 30,
  };

  const [currentSpaceCount, setCurrentSpaceCount] = useState<number>(4);

  useEffect(() => {
    const handleMediaChange = () => {
      for (const mediaQuery in spaceCounts) {
        if (window.matchMedia(mediaQuery).matches) {
          setCurrentSpaceCount(spaceCounts[mediaQuery]);
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
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
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
        </div>
      )}
      {dataChanges && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
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
        </div>
      )}
      {colouring && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
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
        </div>
      )}
    </>
  );
};
export default MySwiper;
