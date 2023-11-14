import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCategory } from "../store/actions/categoryAction";
import Loading from "../components/Loading";
import { fetchQuiz } from "../store/actions/quizAction";
import { fetchColouring } from "../store/actions/colouringAction";
import { fetchWhy } from "../store/actions/whyAction";
import { fetchDifference } from "../store/actions/differenceAction";
import DifferenceCard from "../components/DifferenceCard";
import WhyCard from "../components/WhyCard";
import QuizCard from "../components/QuizCard";
import ColouringCard from "../components/colouringCard";
import { allData } from "../types/allData";

const Catalog: React.FC = () => {
  const [currretCat, setCurrentCat] = useState<number | null>(null);
  const changeCat = (index: number) => {
    if (currretCat == index) {
      setCurrentCat(null);
    } else {
      setCurrentCat(index);
    }
  };

  // -----------------------
  const dispatch = useAppDispatch();
  const { category, errorCategory, loadingCategory } = useAppSelector(
    (state) => state.category
  );
  useEffect(() => {
    fetchCategory()(dispatch);
  }, [dispatch]);

  // -----------------------
  const { quiz, errorQuiz, loadingQuiz } = useAppSelector(
    (state) => state.quiz
  );
  useEffect(() => {
    fetchQuiz()(dispatch);
  }, [dispatch]);

  // -----------------------
  const { colouring, errorColouring, loadingColouring } = useAppSelector(
    (state) => state.colouring
  );
  useEffect(() => {
    fetchColouring()(dispatch);
  }, [dispatch]);

  // -----------------------
  const { why, errorWhy, loadingWhy } = useAppSelector((state) => state.why);
  useEffect(() => {
    fetchWhy()(dispatch);
  }, [dispatch]);

  // -----------------------
  const { difference, errorDifference, loadingDifference } = useAppSelector(
    (state) => state.difference
  );
  useEffect(() => {
    fetchDifference()(dispatch);
  }, [dispatch]);

  // -----------------------
  const isLoading =
    loadingCategory ||
    loadingQuiz ||
    loadingDifference ||
    loadingColouring ||
    loadingWhy;

  // -----------------------
  const haveProd = category && quiz && colouring && difference && why;
  const [prod, setProd] = useState<allData[]>([]);

  useEffect(() => {
    if (haveProd) {
      const prods = [...quiz, ...colouring, ...difference, ...why];
      const shuffledProds = prods.sort(() => Math.random() - 0.5);
      setProd(shuffledProds);
    }
  }, [haveProd, quiz, colouring, difference, why]);
  return (
    <>
      {errorCategory && <p>{errorCategory}</p>}
      {errorQuiz && <p>{errorQuiz}</p>}
      {errorWhy && <p>{errorWhy}</p>}
      {errorDifference && <p>{errorDifference}</p>}
      {errorColouring && <p>{errorColouring}</p>}
      {isLoading && <Loading />}
      {haveProd && (
        <>
          <Wrapper>
            <div>
              <div className="flex justify-center items-center w-3/4 mx-auto h-14 mb-16">
                <input
                  type="search"
                  className="border-gray border-2 w-10/12 rounded-s-xl h-full outline-none px-8 text-xl font-main font-normal"
                />
                <button className="w-2/12 h-full bg-green rounded-e-xl text-white cursor-pointer font-main font-medium text-2xl">
                  Search
                </button>
              </div>
              <div className="w-full my-10 flex justify-between items-start">
                <div className="w-1/4 border-gray border-2 px-5 py-5 flex rounded-xl flex-col justify-start items-start gap-2">
                  {category.map((cat: any, index: number) => {
                    return (
                      <label key={index} className="w-full">
                        <div
                          className="cursor-pointer flex justify-between w-full items-center"
                          onClick={() => changeCat(index)}
                        >
                          <p className="font-main font-medium text-xl text-black">
                            {cat.title}
                          </p>
                          <IoIosArrowDown className="font-medium text-xl" />
                        </div>
                        <ul
                          className={
                            currretCat == index
                              ? "flex flex-col justify-start items-start"
                              : "hidden"
                          }
                        >
                          {cat.child_categories.map(
                            (child: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="mb-2 border-b-2 border-gray w-full font-main font-normal text-lg text-black cursor-pointer hover:text-yellow transition-all duration-300"
                                >
                                  {child.title}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </label>
                    );
                  })}
                </div>
                <div className="w-3/4 pl-5 grid grid-cols-3 gap-4">
                  {prod.map((card: any) => {
                    return card.image1 ? (
                      <DifferenceCard key={card.image1} item={card} />
                    ) : card.description ? (
                      <WhyCard key={card.image} item={card} />
                    ) : card.questions ? (
                      <QuizCard key={card.questions} item={card} />
                    ) : (
                      <ColouringCard key={card.image} item={card} />
                    );
                  })}
                </div>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Catalog;
