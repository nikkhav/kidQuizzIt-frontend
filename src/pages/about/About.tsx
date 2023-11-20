import { useEffect } from "react";
import { fetchAbout } from "../../store/actions/aboutAction";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Loading from "../../components/loading/Loading";
import "./about.css";
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
        <div className="container">
          <div className="about">
            <h2 className="about_title">{about.title}</h2>
            <div className="about_hero">
              <img src={about.image} alt="" />
              <p>{about.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
