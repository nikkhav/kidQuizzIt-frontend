import React from "react";
import Wrapper from "../components/Wrapper";
import DifferenceImg from "../images/swiper1.avif";

function Difference() {
  return (
    <Wrapper>
      <div className="w-full mb-10">
        <h1 className="w-full mb-10 mt-0 sm:text-5xl md:text-6xl md:my-16 mx-auto text-center text-4xl font-main font-semibold">
          Difference
          <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
        </h1>
        <div className="flex items-center justify-between">
          <div className="pr-1 w-1/2 md:pr-3">
            <img
              src={DifferenceImg}
              alt=""
              className="w-full aspect-video object-cover"
            />
          </div>
          <div className="pl-1  w-1/2 md:pl-3">
            <img
              src={DifferenceImg}
              alt=""
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Difference;
