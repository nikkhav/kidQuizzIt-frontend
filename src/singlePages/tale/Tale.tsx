import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGame } from "../../store/actions/gameAction";
import Loading from "../../components/loading/Loading";
import { fairyData } from "../../types/fairyData";
import "./tale.css";

type TaleProps = {
  itemId: number;
  itemParentId: number;
};

const Tale: React.FC<TaleProps> = ({ itemId, itemParentId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { fairy, loadingFairy, errorFairy } = useAppSelector(
    (state) => state.fairy,
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchGame()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (fairy) {
      const index = fairy.findIndex(
        (item) =>
          item.category.parent_id === itemParentId && item.id === itemId,
      );
      setCurrentIndex(index);
    }
  }, [fairy, itemId, itemParentId]);

  const handleNext = () => {
    if (fairy && currentIndex !== null && currentIndex < fairy.length - 1) {
      const nextItem = fairy[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (fairy && currentIndex !== null && currentIndex > 0) {
      const prevItem = fairy[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  if (loadingFairy) return <Loading />;
  if (errorFairy) return <p>{errorFairy}</p>;
  if (!fairy || currentIndex === null || !fairy[currentIndex])
    return <p>No tale found</p>;

  const currentItem = fairy[currentIndex];
  let displayTitle = currentItem.title;
  // Remove <p> tags if present in the title
  displayTitle = displayTitle.replace(/<\/?p>/g, "");

  return (
    <div className="container">
      <div className="tale">
        <h1
          className="tale_title"
          dangerouslySetInnerHTML={{ __html: displayTitle }}
        ></h1>
        <img src={currentItem.image} alt={currentItem.title} />
        <p dangerouslySetInnerHTML={{ __html: currentItem.description }}></p>
        <div className="navigation">
          {currentIndex > 0 && (
            <button onClick={handlePrev}>Previous Tale</button>
          )}
          {currentIndex < fairy.length - 1 && (
            <button onClick={handleNext}>Next Tale</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tale;
