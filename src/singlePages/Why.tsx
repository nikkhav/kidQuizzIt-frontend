import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchWhy } from "../store/actions/whyAction";
import { WhyItem } from "../types/whyItem";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import { AnimatePresence, motion } from "framer-motion";

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
  const [answer, setAnswer] = useState<boolean>(false);
  return (
    <>
      {errorWhy && <p>{errorWhy}</p>}
      {loadingWhy && <Loading />}
      {why && currentItem && (
        <Wrapper>
          <h1 className="w-full my-16 sm:text-5xl md:text-6xl mx-auto text-center text-3xl font-main font-semibold">
            {currentItem.title}
            <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
          </h1>
          {answer && (
            <AnimatePresence>
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                className="w-full flex flex-col justify-center items-center"
              >
                <img src={currentItem.image} alt="" className="w-full h-52 mb-10 sm:h-80 md:h-96 lg:h-[600px]"/>
                <p className="w-full text-lg sm:text-xl md:text-2xl text-black font-main font-normal mt-5">{currentItem.description}</p>
              </motion.div>
            </AnimatePresence>
          )}
          <div className="w-full flex justify-center items-center mb-16">
            <button
              className={`mx-auto bg-green text-white text-lg md:text-2xl px-6 py-3 rounded-xl border-none ${
                answer ? "mt-10" : ""
              }`}
              onClick={() => setAnswer((answer) => !answer)}
            >
              {answer ? "Hide answer" : "Show answer"}
            </button>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Why;
