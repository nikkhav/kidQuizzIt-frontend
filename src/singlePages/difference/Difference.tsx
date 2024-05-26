import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchDifference } from "../../store/actions/differenceAction";
import { differenceData } from "../../types/DifferenceData";
import Loading from "../../components/loading/Loading";
import "./difference.css";

type DifferenceProps = {
  itemId: number;
  itemParentId: number;
};

const Difference: React.FC<DifferenceProps> = ({ itemId, itemParentId }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { difference, errorDifference, loadingDifference } = useAppSelector(
    (state) => state.difference,
  );

  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (difference) {
      const index = difference.findIndex(
        (d) => d.category.parent_id === itemParentId && d.id === itemId,
      );
      setCurrentIndex(index);
    }
  }, [difference, itemId, itemParentId]);

  const handleNext = () => {
    if (
      difference &&
      currentIndex !== null &&
      currentIndex < difference.length - 1
    ) {
      const nextItem = difference[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (difference && currentIndex !== null && currentIndex > 0) {
      const prevItem = difference[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  return (
    <>
      {errorDifference && <p>{errorDifference}</p>}
      {loadingDifference && <Loading />}
      {difference && currentIndex !== null && (
        <div className="container">
          <div className="difference">
            <h1
              className="difference_title"
              dangerouslySetInnerHTML={{
                __html: difference[currentIndex].title,
              }}
            ></h1>
            <div className="difference_hero">
              <img
                src={difference[currentIndex].image}
                alt=""
                className="w-full aspect-video md:h-full"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: difference[currentIndex].description,
                }}
              ></p>
            </div>
            <div className="navigation">
              {currentIndex > 0 && (
                <button onClick={handlePrev}>Previous Item</button>
              )}
              {currentIndex < difference.length - 1 && (
                <button onClick={handleNext}>Next Item</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Difference;
