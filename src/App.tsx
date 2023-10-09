import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
const Home = lazy(() => import("./pages/home/Home"));

type AppProps = {
  load?: boolean;
};
const App: React.FC<AppProps> = ({ load }) => {
  const routes = [
    {
      path: "/",
      element: <Home />,
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
  return (
    <>
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
    </>
  );
};

const t = (a: any) => a;
export default connect(t)(App);
