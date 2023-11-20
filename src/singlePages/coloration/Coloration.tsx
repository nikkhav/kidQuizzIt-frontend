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
  return (
    <>
      {errorColouring && <p>{errorColouring}</p>}
      {loadingColouring && <Loading />}
      {colouring && currentItem && (
        <div className="container">
          <div className="coloration">
            <h1 className="coloration_title">{currentItem.category.title}</h1>
            <img src={currentItem.image} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Coloration;
