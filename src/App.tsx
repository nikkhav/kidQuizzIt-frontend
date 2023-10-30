import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const SinglePage = lazy(() => import("./pages/SinglePage"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));

type AppProps = {
  load?: boolean;
};
const App: React.FC<AppProps> = ({ load }) => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/privacy/:name",
      element: <Privacy />,
    },
    {
      path: "/single-page",
      element: <SinglePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  const colors: string[] = [
    "#98CBEB",
    "#8F3945",
    "#EF7B45",
    "#6EB257",
    "#1d1d1b",
    "#fff",
  ];
  const errorColors: string[] = ["#FF0000", "#DC143C", "#FFA500", "#800000"];
  const warningColors: string[] = ["#FFFF00", "#FFD700", "#FFC107", "#FFA500"];
  const successColors: string[] = [
    "#00FF00",
    "#008000",
    "#50C878",
    "#008080",
    "#008489",
  ];

  return (
    <>
      <Header />
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={
              <Suspense fallback={"loading.."}>
                {load ? "loading.." : t.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

const t = (a: any) => a;
export default connect(t)(App);
