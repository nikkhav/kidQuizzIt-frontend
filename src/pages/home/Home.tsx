import "./home.css";

import MySwiper from "../../components/swiper/Swiper.tsx";

const Home: React.FC = () => {
  return (
    <>
      <div className={"home"}>
        <MySwiper />
      </div>
    </>
  );
};

export default Home;
