import { useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import SwiperComponent from "../components/SwiperComponent";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import swiperImg1 from "../images/swiper1.avif";
import { fetchDifference } from "../store/actions/differenceAction";
import Loading from "../components/Loading";
import { fetchWhy } from "../store/actions/whyAction";

type dataItem = {
  id: number;
  img: string;
  text: string;
};
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { difference, loading, error } = useAppSelector(
    (state) => state.difference
  );
  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);
  const { why, loadingWhy, errorWhy } = useAppSelector((state) => state.why);
  useEffect(() => {
    fetchWhy()(dispatch);
  }, [dispatch]);
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
  return (
    <>
      {loading && loadingWhy && <Loading />}
      {error && <p>{error}</p>}
      {errorWhy && <p>{errorWhy}</p>}
      {difference && (
        <>
          <SwiperComponent
            dataChanges={difference}
            title="FIND THE DIFFERENCES"
          />
          <SwiperComponent data={data} title="BRAIN BOOSTERS" />
          <SwiperComponent data={data} title={null} />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default Home;
