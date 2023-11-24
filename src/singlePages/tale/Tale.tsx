import React, { useEffect } from "react";
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
  // -----------------------
  const dispatch = useAppDispatch();

  const { fairy, loadingFairy, errorFairy } = useAppSelector(
    (state) => state.fairy
  );
  useEffect(() => {
    fetchGame()(dispatch);
  }, [dispatch]);
  const currentItem: fairyData | undefined = fairy?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  return (
    <>
      {errorFairy && <p>{errorFairy}</p>}
      {loadingFairy && <Loading />}
      {fairy && currentItem && (
        <div className="container">
          <div className="tale">
            <h1 className="tale_title">{currentItem.title}</h1>
            <img src={currentItem.image} alt="" />
            <p>{currentItem.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tale;
