import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import DifferenceImg from "../images/swiper1.avif";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchDifference } from "../store/actions/differenceAction";
import { differenceData } from "../types/DifferenceData";
import Loading from "../components/Loading";

type DifferenceProps = {
  itemId: number;
  itemParentId: number;
};
const Difference: React.FC<DifferenceProps> = ({ itemId, itemParentId }) => {
  const dispatch = useAppDispatch();
  const { difference, errorDifference, loadingDifference } = useAppSelector(
    (state) => state.difference
  );
  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);
  const currentItem: differenceData | undefined = difference?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  console.log(currentItem);
  return (
    <>
      {errorDifference && <p>{errorDifference}</p>}
      {loadingDifference && <Loading />}
      {difference && currentItem && (
        <Wrapper>
          <div className="w-full mb-10">
            <h1 className="w-full mb-10 mt-0 sm:text-5xl md:text-6xl md:my-16 mx-auto text-center text-4xl font-main font-semibold">
              {currentItem?.category.title}
              <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
            </h1>
            <div className="w-full flex flex-col md:flex-row md:h-[250px] lg:h-[400px] xl:h-[500px] md:items-start md:justify-start  items-center justify-between mt-20">
              <div className="w-full pr-1 md:pr-3 mb-10 md:h-full">
                <img
                  src={currentItem.image1}
                  alt=""
                  className="w-full aspect-video md:h-full"
                />
              </div>
              <div className="w-full pl-1 md:pl-3 md:h-full">
                <img
                  src={currentItem.image2}
                  alt=""
                  className="w-full aspect-video md:h-full"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Difference;
