import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loading from "../../components/loading/Loading";
import "./artsAndCrafts.css";
import { fetchArtsAndCrafts } from "../../store/actions/artsAndCraftsAction";

type ArtsAndCraftsProps = {
  itemId: number;
  itemParentId: number;
};

const ArtsAndCrafts: React.FC<ArtsAndCraftsProps> = ({
  itemId,
  itemParentId,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { artsAndCrafts, loadingArtsAndCrafts, errorArtsAndCrafts } =
    useAppSelector((state) => state.artsAndCrafts);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchArtsAndCrafts()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (artsAndCrafts) {
      const index = artsAndCrafts.findIndex(
        // @ts-ignore
        (item) =>
          item.category.parent_id === itemParentId && item.id === itemId,
      );
      setCurrentIndex(index);
    }
  }, [artsAndCrafts, itemId, itemParentId]);

  const navigateToActivity = (index: number) => {
    // @ts-ignore
    const item = artsAndCrafts[index];
    navigate(`/single-page/${item.category.parent_id}/${item.id}`);
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      navigateToActivity(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (!artsAndCrafts) return;
    if (currentIndex !== null && currentIndex < artsAndCrafts.length - 1) {
      navigateToActivity(currentIndex + 1);
    }
  };

  if (loadingArtsAndCrafts) return <Loading />;
  if (errorArtsAndCrafts) return <p>{errorArtsAndCrafts}</p>;
  if (!artsAndCrafts || currentIndex === null || !artsAndCrafts[currentIndex])
    return <p>No activity found</p>;

  const currentItem = artsAndCrafts[currentIndex];

  let displayTitle = currentItem ? currentItem.title : "";
  if (displayTitle.includes("<p>")) {
    displayTitle = displayTitle.replace(/<p>/g, "").replace(/<\/p>/g, "");
  }

  return (
    <div className="container">
      <div className="arts_and_crafts">
        <h1
          className="arts_and_crafts_title"
          dangerouslySetInnerHTML={{ __html: displayTitle }}
        ></h1>
        <img src={currentItem.image} alt="Activity Visual" />
        <p dangerouslySetInnerHTML={{ __html: currentItem.description }}></p>
        <div className="navigation">
          {currentIndex > 0 && (
            <button onClick={handlePrev}>Previous Activity</button>
          )}
          {currentIndex < artsAndCrafts.length - 1 && (
            <button onClick={handleNext}>Next Activity</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtsAndCrafts;
