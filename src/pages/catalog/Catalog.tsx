import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCategory } from "../../store/actions/categoryAction";
import Loading from "../../components/loading/Loading";
import { fetchQuiz } from "../../store/actions/quizAction";
import { fetchColouring } from "../../store/actions/colouringAction";
import { fetchWhy } from "../../store/actions/whyAction";
import { fetchDifference } from "../../store/actions/differenceAction";
import DifferenceCard from "../../components/differenceCard/DifferenceCard";
import WhyCard from "../../components/whyCard/WhyCard";
import QuizCard from "../../components/quizCard/QuizCard";
import ColouringCard from "../../components/colouringCard/ColouringCard";
import { allData } from "../../types/allData";
import SearchInput from "../../components/searchInput/SearchInput";
import { useParams } from "react-router-dom";
import "./catalog.css";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { fetchFairy } from "../../store/actions/fairyAction";
import { fetchGame } from "../../store/actions/gameAction";
import TaleCard from "../../components/taleCard/TaleCard";
import GameCard from "../../components/gameCard/GameCard";

const Catalog: React.FC = () => {
  const params = useParams();
  const catId = params.id ? params.id : "";
  const catParentId = params.parentId ? params.parentId : "";
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
  const { fairy, errorFairy, loadingFairy } = useAppSelector(
    (state) => state.fairy
  );
  useEffect(() => {
    fetchFairy()(dispatch);
  }, [dispatch]);

  // -----------------------
  const { game, errorGame, loadingGame } = useAppSelector(
    (state) => state.game
  );
  useEffect(() => {
    fetchGame()(dispatch);
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
    loadingFairy ||
    loadingColouring ||
    loadingGame ||
    loadingWhy;
    
  // -----------------------
  const haveProd =
    category && quiz && colouring && difference && fairy && why && game;
  const [prod, setProd] = useState<allData[]>([]);
  useEffect(() => {
    if (haveProd) {
      const prods = [
        ...quiz,
        ...colouring,
        ...difference,
        ...why,
        ...fairy,
        ...game,
      ];
      if (catId && catParentId) {
        const newArr = prods.filter(
          (a) => a.category.parent_id == +catParentId && a.category_id == +catId
        );
        const shuffledProds = newArr.sort(() => Math.random() - 0.5);
        setProd(shuffledProds);
        return;
      } else {
        const shuffledProds = prods.sort(() => Math.random() - 0.5);
        setProd(shuffledProds);
      }
    }
  }, [quiz, colouring, difference, why, fairy, game, catId]);
  const searchProd = (value: string) => {
    const newProd: allData[] = [];
    quiz?.map((a) => {
      if (a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        newProd.push(a);
      }
    });
    colouring?.map((a) => {
      if (
        a.category.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        newProd.push(a);
      }
    });
    difference?.map((a) => {
      if (
        a.category.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        newProd.push(a);
      }
    });
    why?.map((a) => {
      if (a.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        newProd.push(a);
      }
    });
    setProd(newProd);
  };
  const ChangeQuizes = useCallback(
    (event: any) => {
      if (quiz) {
        const target = event.target.innerText;
        const newArr = quiz?.filter((item) => {
          return item.category.title == target;
        });
        setProd(newArr);
      }
      setCurrentCat(null);
    },
    [quiz]
  );
  const ChangeColouring = useCallback(
    (event: any) => {
      const target = event.target.innerText;
      if (colouring) {
        const target = event.target.innerText;
        const newArr = colouring?.filter((item) => {
          return item.category.title == target;
        });
        setProd([]);
        setProd(newArr);
      }
      setCurrentCat(null);
    },
    [colouring]
  );
  const ChangeWhy = useCallback(
    (event: any) => {
      const target = event.target.innerText;
      if (why) {
        const target = event.target.innerText;
        const newArr = why?.filter((item) => {
          return item.category.title == target;
        });
        setProd(newArr);
      }
      setCurrentCat(null);
    },
    [why]
  );
  const ChangeDifference: any = useCallback(
    (event: any) => {
      const target = event.target.innerText;
      if (difference) {
        const target = event.target.innerText;
        const newArr = difference?.filter((item) => {
          return item.category.title == target;
        });
        setProd(newArr);
      }
      setCurrentCat(null);
    },
    [difference]
  );
  const dropRef = useRef(null);
  useClickOutSide(dropRef, () => {
    setCurrentCat(null);
  });
  return (
    <>
      {errorCategory && <p>{errorCategory}</p>}
      {errorQuiz && <p>{errorQuiz}</p>}
      {errorWhy && <p>{errorWhy}</p>}
      {errorDifference && <p>{errorDifference}</p>}
      {errorColouring && <p>{errorColouring}</p>}
      {errorFairy && <p>{errorFairy}</p>}
      {errorGame && <p>{errorGame}</p>}
      {isLoading && <Loading />}
      {haveProd && (
        <>
          <div className="container">
            <div>
              <SearchInput searchProd={searchProd} />
              <div className="catalog">
                {/* <div
                  className={`catalog_filters ${
                    currretCat ? "catalog_filters_visible" : ""
                  }`}
                >
                  {category.map((cat: any, index: number) => {
                    return (
                      <label key={index} className="catalog_filters_label">
                        <div
                          className="catalog_filters_label_item"
                          onClick={() => changeCat(index)}
                        >
                          <p className="font-main font-medium text-xl text-black">
                            {cat.title}
                          </p>
                          <IoIosArrowDown className="font-medium text-xl" />
                        </div>
                        {currretCat == index && (
                          <AnimatePresence>
                            <motion.ul
                              initial={{ x: "-50%" }}
                              animate={{ x: "0" }}
                              exit={{ x: "-50%" }}
                              className="dropdown"
                              ref={dropRef}
                            >
                              {cat.child_categories.map(
                                (child: any, index: number) => {
                                  return (
                                    <li
                                      key={index}
                                      className="mb-2 border-b-2 border-gray w-full font-main font-normal text-lg text-black cursor-pointer hover:text-yellow transition-all duration-300"
                                      onClick={
                                        cat.title == "Quizes"
                                          ? () => ChangeQuizes(event)
                                          : cat.title == "Colourings"
                                          ? () => ChangeColouring(event)
                                          : cat.title == "Why Questions"
                                          ? () => ChangeWhy(event)
                                          : () => ChangeDifference(event)
                                      }
                                    >
                                      {child.title}
                                    </li>
                                  );
                                }
                              )}
                            </motion.ul>
                          </AnimatePresence>
                        )}
                      </label>
                    );
                  })}
                </div> */}
                <div className="catalog_container">
                  {prod.map((card: any) => {
                    if (card.category.parent_id == 4) {
                      return (
                        <DifferenceCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id == 3) {
                      return (
                        <WhyCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id == 1) {
                      return (
                        <QuizCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id == 40) {
                      return (
                        <TaleCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else if (card.category.parent_id == 41) {
                      return (
                        <GameCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    } else {
                      return (
                        <ColouringCard
                          key={`${card.category.parent_id}/${card.id}`}
                          item={card}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Catalog;
