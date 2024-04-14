import "./home.css";

import MySwiper from "../../components/swiper/Swiper.tsx";

const Home: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const { quiz, errorQuiz, loadingQuiz } = useAppSelector(
  //   (state) => state.quiz,
  // );
  // useEffect(() => {
  //   fetchQuiz()(dispatch);
  // }, [dispatch]);
  //
  // // -----------------------
  // const { fairy, errorFairy, loadingFairy } = useAppSelector(
  //   (state) => state.fairy,
  // );
  // useEffect(() => {
  //   fetchFairy()(dispatch);
  // }, [dispatch]);
  // // -----------------------
  // const { game, errorGame, loadingGame } = useAppSelector(
  //   (state) => state.game,
  // );
  // useEffect(() => {
  //   fetchGame()(dispatch);
  // }, [dispatch]);
  //
  // // -----------------------
  //
  // const { difference, loadingDifference, errorDifference } = useAppSelector(
  //   (state) => state.difference,
  // );
  // useEffect(() => {
  //   fetchDifference()(dispatch);
  // }, [dispatch]);
  // // -----------------------
  //
  // const { why, loadingWhy, errorWhy } = useAppSelector((state) => state.why);
  // useEffect(() => {
  //   fetchWhy()(dispatch);
  // }, [dispatch]);
  // // -----------------------
  //
  // const { colouring, loadingColouring, errorColouring } = useAppSelector(
  //   (state) => state.colouring,
  // );
  // useEffect(() => {
  //   fetchColouring()(dispatch);
  // }, [dispatch]);

  // const isLoading =
  //   loadingDifference &&
  //   loadingWhy &&
  //   loadingColouring &&
  //   loadingGame &&
  //   loadingFairy &&
  //   loadingQuiz;
  // const allData = difference && colouring && why && fairy && game && quiz;
  return (
    <>
      {/*{isLoading && <Loading />}*/}
      {/*{errorDifference && <p>{errorDifference}</p>}*/}
      {/*{errorGame && <p>{errorGame}</p>}*/}
      {/*{errorFairy && <p>{errorFairy}</p>}*/}
      {/*{errorQuiz && <p>{errorQuiz}</p>}*/}
      {/*{errorWhy && <p>{errorWhy}</p>}*/}
      {/*{errorColouring && <p>{errorColouring}</p>}*/}
      {/*{allData && (*/}
      {/*  <div className="home">*/}
      {/*    <MySwiper />*/}
      {/*    /!*<SwiperComponent quiz={quiz} title="Quizes" />*!/*/}
      {/*    /!*<SwiperComponent colouring={colouring} title={"Colourings"} />*!/*/}
      {/*    /!*<SwiperComponent why={why} title="Why Questions" />*!/*/}
      {/*    /!*<SwiperComponent difference={difference} title="Logic Puzzles" />*!/*/}
      {/*    /!*<SwiperComponent fairy={fairy} title="Fairy Tales" />*!/*/}
      {/*    /!*<SwiperComponent game={game} title="Games" />*!/*/}
      {/*    <ScrollTop />*/}
      {/*  </div>*/}
      {/*)}*/}
      <div className={"home"}>
        <MySwiper />
      </div>
    </>
  );
};

export default Home;
