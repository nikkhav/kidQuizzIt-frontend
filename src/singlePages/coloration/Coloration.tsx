import React, { useEffect } from "react";
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
    (state) => state.colouring
  );
  useEffect(() => {
    fetchColouring()(dispatch);
  }, [dispatch]);
  const currentItem: colouringData | undefined = colouring?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  const handleDownloadClick = () => {
    if (currentItem) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = "downloaded_image.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
      xhr.open("GET", currentItem.image);
      xhr.send();
    }
  };
  return (
    <>
      {errorColouring && <p>{errorColouring}</p>}
      {loadingColouring && <Loading />}
      {colouring && currentItem && (
        <div className="container">
          <div className="coloration">
            <h1
              className="coloration_title"
              dangerouslySetInnerHTML={{ __html: currentItem.title }}
            ></h1>
            <img src={currentItem.image} alt="" />
            <button onClick={handleDownloadClick}>DOWNLOAD IMAGE</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Coloration;
