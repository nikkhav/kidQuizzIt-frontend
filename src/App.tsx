import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const Home = lazy(() => import("./pages/home/Home"));
const SinglePage = lazy(() => import("./pages/singlePage/SinglePage"));
const About = lazy(() => import("./pages/about/About"));
const Privacy = lazy(() => import("./pages/privacy/Privacy"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));
const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Terms = lazy(() => import("./pages/terms/Terms"));

import Loading from "./components/loading/Loading";

type ComponentType = React.FC<{}>;

const App: React.FC = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/catalog/:parentId?/:id?",
      element: <Catalog />,
    },
    {
      path: "/single-page/:parent_id/:id",
      element: <SinglePage />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={<Suspense fallback={<Loading />}>{t.element}</Suspense>}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
