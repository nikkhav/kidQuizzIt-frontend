import { useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import SwiperComponent from "../components/SwiperComponent";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import swiperImg1 from "../images/swiper1.avif";
import { fetchDifference } from "../store/actions/differenceAction";
import Loading from "../components/Loading";
import { fetchWhy } from "../store/actions/whyAction";
import { fetchColouring } from "../store/actions/colouringAction";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { difference, loadingDifference, errorDifference } = useAppSelector(
    (state) => state.difference
  );
  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);
  const { why, loadingWhy, errorWhy } = useAppSelector((state) => state.why);
  useEffect(() => {
    fetchWhy()(dispatch);
  }, [dispatch]);
  const { colouring, loadingColouring, errorColouring } = useAppSelector(
    (state) => state.colouring
  );
  useEffect(() => {
    fetchColouring()(dispatch);
  }, [dispatch]);
  return (
    <>
      {loadingDifference && loadingWhy && loadingColouring && <Loading />}
      {errorDifference && <p>{errorDifference}</p>}
      {errorWhy && <p>{errorWhy}</p>}
      {errorColouring && <p>{errorColouring}</p>}
      {difference && colouring && why && (
        <>
          <SwiperComponent
            dataChanges={difference}
            title="FIND THE DIFFERENCES"
          />
          <SwiperComponent data={why} title="BRAIN BOOSTERS" />
          <SwiperComponent colouring={colouring} title={null} />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default Home;
