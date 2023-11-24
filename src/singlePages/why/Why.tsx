import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchWhy } from "../../store/actions/whyAction";
import { WhyItem } from "../../types/whyItem";
import Loading from "../../components/loading/Loading";
import { AnimatePresence, motion } from "framer-motion";
import "./why.css";

type WhyProps = {
  itemId: number;
  itemParentId: number;
};
const Why: React.FC<WhyProps> = ({ itemId, itemParentId }) => {
  // -----------------------
  const dispatch = useAppDispatch();

  const { why, errorWhy, loadingWhy } = useAppSelector((state) => state.why);
  useEffect(() => {
    fetchWhy()(dispatch);
  }, [dispatch]);
  const currentItem: WhyItem | undefined = why?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  return (
    <>
      {errorWhy && <p>{errorWhy}</p>}
      {loadingWhy && <Loading />}
      {why && currentItem && (
        <div className="container">
          <div className="answer">
            <h1 className="why_title">{currentItem.title}</h1>
            <img src={currentItem.image} alt="" />
            <p>{currentItem.description}</p>
            {currentItem.description2 && <p>{currentItem.description2}</p>}
            {currentItem.description3 && <p>{currentItem.description3}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Why;
