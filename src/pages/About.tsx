import Wrapper from "../components/Wrapper";
import { useEffect } from "react";
import { fetchAbout } from "../store/actions/aboutAction";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Loading from "../components/Loading";

const About: React.FC = () => {
  const dispatch = useAppDispatch();
  const { about, loading, error } = useAppSelector((state) => state.about);
  useEffect(() => {
    fetchAbout()(dispatch);
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {about && (
        <>
          <Wrapper>
            <div className="w-full flex-col items-center justify-center">
              <h2 className="items-center flex-col text-center text-black font-main font-bold text-6xl sm:text-7xl md:text-7xl lg:text-7xl">
                {about.title}
                <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
              </h2>
            </div>
          </Wrapper>
          <img
            src={about.image}
            alt=""
            className="w-full h-96 object-cover my-16 md:my-20"
          />
          <Wrapper>
            <p className="font-main font-normal text-black text-lg sm:text-2xl leading-7 mb-4">
              {/* {about.subtitle} */}
            </p>
            <p className="font-main font-normal text-black text-lg sm:text-2xl leading-7 mb-16">
              {about.description}
            </p>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default About;
