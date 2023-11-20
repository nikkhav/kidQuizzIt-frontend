import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./scrollTop.css";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scroll && (
        <BsFillArrowUpCircleFill onClick={scrollUp} className="scrollTop" />
      )}
    </>
  );
};

export default ScrollTop;
