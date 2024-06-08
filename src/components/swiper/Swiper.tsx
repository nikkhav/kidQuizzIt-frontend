import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./swiper.css";
import CategoryCard from "../categoryCard/CategoryCard.tsx";
import axios from "../../axios";
import { categoryData } from "../../types/categoryData.ts";

type CardCountMap = {
  [key: string]: number;
};
const MySwiper: React.FC = () => {
  const [categories, setCategories] = useState([]);
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

  const getCategories = async () => {
    try {
      const response = await axios.get("category");
      setCategories(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const extractTags = (str: string) => {
    const regex = /(<([^>]+)>)/gi;
    return str.replace(regex, "");
  };

  useEffect(() => {
    function handleMediaChange() {
      let newCardCount = currentCardCount;
      let newSpaceCount = currentSpaceCount;
      for (const mediaQuery in cardCounts) {
        if (window.matchMedia(mediaQuery).matches) {
          newCardCount = cardCounts[mediaQuery];
          break;
        }
      }
      for (const mediaQuery in spaceCounts) {
        if (window.matchMedia(mediaQuery).matches) {
          newSpaceCount = spaceCounts[mediaQuery];
          break;
        }
      }
      if (
        newCardCount !== currentCardCount ||
        newSpaceCount !== currentSpaceCount
      ) {
        setCurrentCardCount(newCardCount);
        setCurrentSpaceCount(newSpaceCount);
      }
    }

    window.addEventListener("resize", handleMediaChange);
    handleMediaChange(); // Initial check

    return () => window.removeEventListener("resize", handleMediaChange);
  }, [cardCounts, spaceCounts]);

  return (
    <>
      {categories &&
        categories.map((category: categoryData) => {
          if (category.title.includes("Logic Puzzles")) return;
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
    </>
  );
};
export default MySwiper;
