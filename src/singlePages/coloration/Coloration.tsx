import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchColouring } from "../../store/actions/colouringAction";
import { colouringData } from "../../types/colouringData";
import Loading from "../../components/loading/Loading";
import "./coloration.css";

type ColorationProps = {
  itemId: number;
  itemParentId: number;
};

const Coloration: React.FC<ColorationProps> = ({ itemId, itemParentId }) => {
  const dispatch = useAppDispatch();
  const { colouring, errorColouring, loadingColouring } = useAppSelector(
    (state) => state.colouring,
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchColouring()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (colouring) {
      const index = colouring.findIndex(
        (item) =>
          item.category.parent_id === itemParentId && item.id === itemId,
      );
      setCurrentIndex(index);
    }
  }, [colouring, itemId, itemParentId]);

  const handleNext = () => {
    if (
      colouring &&
      currentIndex !== null &&
      currentIndex < colouring.length - 1
    ) {
      const nextItem = colouring[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (colouring && currentIndex !== null && currentIndex > 0) {
      const prevItem = colouring[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  const handleDownloadClick = () => {
    if (colouring && currentIndex !== null) {
      const currentItem = colouring[currentIndex];
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = "downloaded_image.jpg"; // or `currentItem.title.jpg` for dynamic naming
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
      xhr.open("GET", currentItem.image);
      xhr.send();
    }
  };

  if (errorColouring) return <p>{errorColouring}</p>;
  if (loadingColouring) return <Loading />;
  if (!colouring || currentIndex === null)
    return <p>No colouring data available.</p>;

  const currentItem = colouring[currentIndex];

  return (
    <div className="container">
      <div className="coloration">
        <h1
          className="coloration_title"
          dangerouslySetInnerHTML={{ __html: currentItem.title }}
        ></h1>
        <img src={currentItem.image} alt="Colouring Image" />
        <button onClick={handleDownloadClick}>DOWNLOAD IMAGE</button>
        <div className="navigation">
          {currentIndex > 0 && (
            <button onClick={handlePrev}>Previous Image</button>
          )}
          {currentIndex < colouring.length - 1 && (
            <button onClick={handleNext}>Next Image</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coloration;
