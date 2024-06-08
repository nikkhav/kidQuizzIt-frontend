import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchWhy } from "../../store/actions/whyAction";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import styles from "./tour.module.css";
import axios from "../../axios";
import { tourData } from "../../types/TourData.ts";

type TourProps = {
  itemId: number;
  itemParentId: number;
};

const Tour: React.FC<TourProps> = ({ itemId, itemParentId }) => {
  const [tour, setTour] = useState<tourData>();
  // const dispatch = useAppDispatch();
  // const { why, errorWhy, loadingWhy } = useAppSelector((state) => state.why);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   fetchWhy()(dispatch);
  // }, [dispatch]);
  const getTour = async () => {
    try {
      const response = await axios.get("tour");
      setTour(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  useEffect(() => {
    // @ts-ignore
    const index = tour?.findIndex(
      // @ts-ignore
      (a) => a.category.parent_id === itemParentId && a.id === itemId,
    );
    // @ts-ignore
    setCurrentIndex(index);
  }, [tour, itemId, itemParentId]);

  if (currentIndex === null) return null; // Early return if index isn't set

  const currentItem = tour ? tour[currentIndex] : undefined;

  const handleNext = () => {
    // @ts-ignore
    if (currentIndex !== null && currentIndex < tour.length - 1) {
      // @ts-ignore
      const nextItem = tour[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      // @ts-ignore
      const prevItem = tour[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  let displayTitle;

  if (currentItem) {
    displayTitle = currentItem.title;
    // Remove <p> tags if present in the title
    displayTitle = displayTitle.replace(/<\/?p>/g, "");
  }

  return (
    <>
      {/*{errorWhy && <p>{errorWhy}</p>}*/}
      {/*{loadingWhy && <Loading />}*/}
      {currentItem && (
        <div className="container">
          <div className={styles.answer}>
            <div>
              <h1
                className={styles.tour_title}
                dangerouslySetInnerHTML={{ __html: displayTitle }}
              ></h1>
              <p className={styles.city}>
                {currentItem.city.name}, {currentItem.city.country.name}
              </p>
            </div>

            <img src={currentItem.image} alt={currentItem.title} />
            <p
              dangerouslySetInnerHTML={{ __html: currentItem.description1 }}
            ></p>
            {currentItem.description2 && (
              <p
                dangerouslySetInnerHTML={{ __html: currentItem.description2 }}
              ></p>
            )}
            <div className="navigation">
              {currentIndex > 0 && (
                <button onClick={handlePrev}>Previous Question</button>
              )}
              {/* @ts-ignore*/}
              {currentIndex < tour.length - 1 && (
                <button onClick={handleNext}>Next Question</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
