import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import swiperImg1 from "../images/swiper1.avif";
import Wrapper from "./Wrapper";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

type dataItem = {
  id: number;
  img: string;
  text: string;
};
type dataChanges = {
  id: number;
  img1: string;
  img2: string;
};
type MySwiperProps = {
  data?: dataItem[];
  dataChanges?: dataChanges[];
};
const MySwiper: React.FC<MySwiperProps> = ({ data, dataChanges }) => {
  return (
    <>
      {data && (
        <Wrapper>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to="/catalog">
                    <img src={item.img} alt="" />
                    <h2 className="swiper_text">{item.text}</h2>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Wrapper>
      )}
      {dataChanges && (
        <Wrapper>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {dataChanges.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to="/catalog">
                    <img className="difference_img" src={item.img1} alt="" />
                    <img className="difference_img" src={item.img2} alt="" />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Wrapper>
      )}
    </>
  );
};
export default MySwiper;
