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
import { quizData } from "../../types/QuizData";
import QuizCard from "../quizCard/QuizCard";
import { fairyData } from "../../types/fairyData";
import TaleCard from "../taleCard/TaleCard";
import { gameData } from "../../types/gameData";
import GameCard from "../gameCard/GameCard";

type MySwiperProps = {
  why?: WhyItem[] | null;
  difference?: differenceData[] | null;
  colouring?: colouringData[] | null;
  quiz?: quizData[] | null;
  fairy?: fairyData[] | null;
  game?: gameData[] | null;
};
type CardCountMap = {
  [key: string]: number;
};
const MySwiper: React.FC<MySwiperProps> = ({
  why,
  difference,
  colouring,
  quiz,
  fairy,
  game,
}) => {
  const cardCounts: CardCountMap = {
    "(max-width: 480px)": 1,
    "(max-width: 760px)": 2,
    "(max-width: 1024px)": 2,
    "(min-width: 1200px)": 3,
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
      {why && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {why.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <WhyCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {difference && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {difference.map((item, index) => {
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
      {quiz && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {quiz.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <QuizCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {fairy && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {fairy.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <TaleCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {game && (
        <div className="container">
          <Swiper
            slidesPerView={currentCardCount}
            spaceBetween={currentSpaceCount}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {game.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <GameCard item={item} />
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
