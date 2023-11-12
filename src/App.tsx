import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
const Home = lazy(() => import("./pages/Home"));
const SinglePage = lazy(() => import("./pages/SinglePage"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Catalog = lazy(() => import("./pages/Catalog"));

import { connect } from "react-redux";
import Loading from "./components/Loading";

type ComponentType = React.FC<{}>;

type appProps = {
  dispatch?: any;
  loading?: boolean;
};
const App: React.FC<appProps> = ({ dispatch, loading }) => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
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

  useEffect(() => {
    axios.get("https://admin.kidquizzit.com/api/v1/about").then((response) => {
      dispatch({
        type: "ABOUT",
        payload: response.data[0],
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://admin.kidquizzit.com/api/v1/privacyandpolicy")
      .then((response) => {
        dispatch({
          type: "POLICY",
          payload: response.data[0],
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://admin.kidquizzit.com/api/v1/termsandcondition")
      .then((response) => {
        dispatch({
          type: "TERMS",
          payload: response.data[0],
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://admin.kidquizzit.com/api/v1/category")
      .then((response) => {
        dispatch({
          type: "CATEGORY",
          payload: response.data,
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
      });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={
              <Suspense fallback={<Loading />}>
                {loading ? <Loading /> : t.element}
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
