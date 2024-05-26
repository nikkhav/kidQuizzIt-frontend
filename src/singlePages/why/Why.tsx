import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchWhy } from "../../store/actions/whyAction";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import "./why.css";

type WhyProps = {
  itemId: number;
  itemParentId: number;
};

const Why: React.FC<WhyProps> = ({ itemId, itemParentId }) => {
  const dispatch = useAppDispatch();
  const { why, errorWhy, loadingWhy } = useAppSelector((state) => state.why);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchWhy()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const index = why?.findIndex(
      (a) => a.category.parent_id === itemParentId && a.id === itemId,
    );
    // @ts-ignore
    setCurrentIndex(index);
  }, [why, itemId, itemParentId]);

  if (currentIndex === null) return null; // Early return if index isn't set

  const currentItem = why ? why[currentIndex] : undefined;

  const handleNext = () => {
    // @ts-ignore
    if (currentIndex !== null && currentIndex < why.length - 1) {
      // @ts-ignore
      const nextItem = why[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      // @ts-ignore
      const prevItem = why[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  return (
    <>
      {errorWhy && <p>{errorWhy}</p>}
      {loadingWhy && <Loading />}
      {currentItem && (
        <div className="container">
          <div className="answer">
            <h1
              className="why_title"
              dangerouslySetInnerHTML={{ __html: currentItem.title }}
            ></h1>
            <img src={currentItem.image} alt={currentItem.title} />
            <p
              dangerouslySetInnerHTML={{ __html: currentItem.description }}
            ></p>
            {currentItem.description2 && (
              <p
                dangerouslySetInnerHTML={{ __html: currentItem.description2 }}
              ></p>
            )}
            {currentItem.description3 && (
              <p
                dangerouslySetInnerHTML={{ __html: currentItem.description3 }}
              ></p>
            )}
            <div className="navigation">
              {currentIndex > 0 && (
                <button onClick={handlePrev}>Previous Question</button>
              )}
              {/* @ts-ignore*/}
              {currentIndex < why.length - 1 && (
                <button onClick={handleNext}>Next Question</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Why;
