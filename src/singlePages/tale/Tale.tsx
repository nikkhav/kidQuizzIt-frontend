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
    (state) => state.fairy,
  );
  useEffect(() => {
    fetchGame()(dispatch);
  }, [dispatch]);
  const currentItem: fairyData | undefined = fairy?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId,
  );

  let displayTitle = currentItem ? currentItem.title : "";

  // Check if the title contains <p> tags and remove them
  if (displayTitle.includes("<p>")) {
    displayTitle = displayTitle.replace(/<p>/g, "").replace(/<\/p>/g, "");
  }
  return (
    <>
      {errorFairy && <p>{errorFairy}</p>}
      {loadingFairy && <Loading />}
      {fairy && currentItem && (
        <div className="container">
          <div className="tale">
            <h1
              className="tale_title"
              dangerouslySetInnerHTML={{ __html: displayTitle }}
            ></h1>
            <img src={currentItem.image} alt="" />
            <p
              dangerouslySetInnerHTML={{ __html: currentItem.description }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tale;
