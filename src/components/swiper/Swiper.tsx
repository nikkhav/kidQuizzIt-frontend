import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./swiper.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { fetchCategory } from "../../store/actions/categoryAction.ts";
import Loading from "../loading/Loading.tsx";
import CategoryCard from "../categoryCard/CategoryCard.tsx";

type MySwiperProps = {
  // why?: WhyItem[] | null;
  // difference?: differenceData[] | null;
  // colouring?: colouringData[] | null;
  // quiz?: quizData[] | null;
  // fairy?: fairyData[] | null;
  // game?: gameData[] | null;
};
type CardCountMap = {
  [key: string]: number;
};
const MySwiper: React.FC<MySwiperProps> = () => {
  const cardCounts: CardCountMap = {
    "(max-width: 480px)": 1,
    "(max-width: 760px)": 2,
    "(max-width: 1024px)": 2,
    "(min-width: 1200px)": 3,
  };
  const [currentCardCount, setCurrentCardCount] = useState<number>(4);
  const dispatch = useAppDispatch();
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

  // const getLatestThree = (data: any[]) => {
  //   return [...data].sort((a, b) => b.id - a.id).slice(0, 3); // Assuming 'id' is an increasing number that can be sorted on
  // };

  const { category, errorCategory, loadingCategory } = useAppSelector(
    (state) => state.category,
  );
  useEffect(() => {
    fetchCategory()(dispatch);
  }, [dispatch]);

  const extractTags = (str: string) => {
    const regex = /(<([^>]+)>)/gi;
    return str.replace(regex, "");
  };

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
      {loadingCategory && <Loading />}
      {errorCategory && <p>{errorCategory}</p>}

      {category &&
        category.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <h2 className="swiper_title">{extractTags(category.title)}</h2>
              <div className="container">
                <Swiper
                  slidesPerView={currentCardCount}
                  spaceBetween={currentSpaceCount}
                  className="mySwiper"
                  navigation={true}
                  modules={[Navigation]}
                >
                  {category.child_categories.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <CategoryCard item={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </React.Fragment>
          );
        })}

      {/*{why && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(why).map((item) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={item.id}>*/}
      {/*            <WhyCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{difference && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(difference).map((item, index) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={index}>*/}
      {/*            <DifferenceCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{colouring && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(colouring).map((item) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={item.id}>*/}
      {/*            <ColouringCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{quiz && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(quiz).map((item) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={item.id}>*/}
      {/*            <QuizCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{fairy && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(fairy).map((item) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={item.id}>*/}
      {/*            <TaleCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{game && (*/}
      {/*  <div className="container">*/}
      {/*    <Swiper*/}
      {/*      slidesPerView={currentCardCount}*/}
      {/*      spaceBetween={currentSpaceCount}*/}
      {/*      className="mySwiper"*/}
      {/*      navigation={true}*/}
      {/*      modules={[Navigation]}*/}
      {/*    >*/}
      {/*      {getLatestThree(game).map((item) => {*/}
      {/*        return (*/}
      {/*          <SwiperSlide key={item.id}>*/}
      {/*            <GameCard item={item} />*/}
      {/*          </SwiperSlide>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </Swiper>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};
export default MySwiper;
