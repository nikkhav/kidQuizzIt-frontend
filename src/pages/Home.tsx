import ScrollTop from "../components/ScrollTop";
import SwiperComponent from "../components/SwiperComponent";
import swiperImg1 from "../images/swiper1.avif";

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
const Home: React.FC = () => {
  const data: dataItem[] = [
    {
      id: 1,
      img: swiperImg1,
      text: "Check out the issue!",
    },
    {
      id: 2,
      img: swiperImg1,
      text: "Check out the issue!",
    },
    {
      id: 3,
      img: swiperImg1,
      text: "Check out the issue!",
    },
    {
      id: 4,
      img: swiperImg1,
      text: "Check out the issue!",
    },
    {
      id: 5,
      img: swiperImg1,
      text: "Check out the issue!",
    },
    {
      id: 6,
      img: swiperImg1,
      text: "Check out the issue!",
    },
  ];
  const dataChanges: dataChanges[] = [
    {
      id: 1,
      img1: swiperImg1,
      img2: swiperImg1,
    },
    {
      id: 2,
      img1: swiperImg1,
      img2: swiperImg1,
    },
    {
      id: 3,
      img1: swiperImg1,
      img2: swiperImg1,
    },
    {
      id: 4,
      img1: swiperImg1,
      img2: swiperImg1,
    },
    {
      id: 5,
      img1: swiperImg1,
      img2: swiperImg1,
    },
    {
      id: 6,
      img1: swiperImg1,
      img2: swiperImg1,
    },
  ];
  return (
    <>
      {/* <SwiperComponent dataChanges={dataChanges} title="FIND THE DIFFERENCES" />
      <SwiperComponent data={data} title="BRAIN BOOSTERS" />
      <SwiperComponent data={data} title={null} />
      <ScrollTop /> */}
    </>
  );
};

export default Home;
