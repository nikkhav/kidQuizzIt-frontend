import React from "react";
import ColorationImg from "../images/swiper1.avif";
import Wrapper from "../components/Wrapper";
function Coloration() {
  return (
    <Wrapper>
      <div className="w-full my-10">
        <h1 className="w-full my-16 sm:text-5xl md:text-6xl mx-auto text-center text-4xl font-main font-semibold">
          Colourings
          <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
        </h1>
        <img
          src={ColorationImg}
          alt=""
          className="w-full aspect-video object-cover"
        />
      </div>
    </Wrapper>
  );
}

export default Coloration;
