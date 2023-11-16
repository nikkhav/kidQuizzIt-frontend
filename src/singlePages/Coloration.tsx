import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchColouring } from "../store/actions/colouringAction";
import { colouringData } from "../types/colouringData";
import Loading from "../components/Loading";

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
        <Wrapper>
          <div className="w-full my-10">
            <h1 className="w-full my-16 sm:text-5xl md:text-6xl mx-auto text-center text-4xl font-main font-semibold">
              {currentItem.category.title}
              <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
            </h1>
            <img
              src={currentItem.image}
              alt=""
              className="w-full h-60 sm:h-96 lg:aspect-auto lg:h-[600px]"
            />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Coloration;
