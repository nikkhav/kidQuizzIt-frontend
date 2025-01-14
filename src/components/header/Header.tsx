import "./header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { disableScroll, enableScroll } from "../../hooks/scrool";
import { IoGameController } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiPaintBrush } from "react-icons/gi";
import { BsPatchQuestionFill } from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";
import axios from "../../axios";
import { categoryData } from "../../types/categoryData.ts";

const Header: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const handleNavItemHover = (index: number) => {
    const navItems = document.querySelectorAll(`.nav_item`);
    const navItem = navItems[index];
    if (navItem) {
      navItem.classList.add("hovered");
    }
  };

  const handleNavItemDropdownHover = () => {
    const navItems = document.querySelectorAll(".nav_item");
    navItems.forEach((navItem) => {
      navItem.classList.remove("hovered");
    });
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("category");
      setCategories(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const dropRef = useRef(null);
  const [drop, setDrop] = useState<boolean>(false);

  useClickOutSide(dropRef, () => {
    setDrop(false);
  });
  const [burger, setBurger] = useState<boolean>(false);
  const [catItem, setCatItem] = useState<number | null>(null);
  const changeCurrentCat = (index: number) => {
    if (catItem == index) {
      return setCatItem(null);
    }
    setCatItem(index);
  };
  const burgerOpen = () => {
    setBurger(true);
    disableScroll();
  };
  const closeBurger = () => {
    setBurger(false);
    enableScroll();
  };
  const changePage = () => {
    setBurger(false);
    enableScroll();
    enableScroll();
  };

  // const changeCat = () => {
  //   setDrop(false);
  //   setBurger(false);
  //   enableScroll();
  // };
  return (
    <>
      {categories && (
        <>
          <div className="header_top_bg">
            <div className="container">
              <div className="header_top">
                {/*<Link to="/">*/}
                {/*  <h1 className={"logo-text"}>KidQuizIt</h1>*/}
                {/*  /!*<img src={logo} className="logo" alt="" />*!/*/}
                {/*</Link>*/}

                <Link to="/about" className="else_links">
                  <BsFillPeopleFill />
                  <h3>About us</h3>
                </Link>
                <Link to="/contacts" className="else_links">
                  <MdContactPhone />
                  <h3>Contacts</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="header_bg">
            <div className="container">
              <header>
                <Link to="/">
                  <h1 className={"logoText"}>KidQuizIt</h1>
                  {/*<img src={logo} className="logo" alt="" />*/}
                </Link>
                <nav>
                  {categories.map((cat: categoryData, index) => {
                    const icons = [
                      <FaPlayCircle />,
                      <BsPatchQuestionFill />,
                      <IoGameController />,
                      <MdTour />,
                      <GiPaintBrush />,
                    ];

                    const Icon = icons[index] || <MdTour />;
                    return (
                      <>
                        <div
                          key={`${cat.title}${index + 1}${cat.id}`}
                          className="nav_item"
                        >
                          {Icon}
                          <h3
                            dangerouslySetInnerHTML={{ __html: cat.title }}
                          ></h3>
                        </div>
                        <div
                          onMouseEnter={() => handleNavItemHover(index)}
                          onMouseLeave={() => handleNavItemDropdownHover()}
                          className="nav_item_dropdown"
                        >
                          {cat.child_categories.map((a) => {
                            return (
                              <Link
                                key={`${a.title}${a.id}${a.parent_id}`}
                                to={`/catalog/${a.parent_id}/${a.id}`}
                                dangerouslySetInnerHTML={{ __html: a.title }}
                              ></Link>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                </nav>
                <div className="burger_btn" onClick={burgerOpen}>
                  <HiMenu />
                </div>
              </header>
            </div>
            {burger && (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0" }}
                    exit={{ y: "-100%" }}
                    className="burger"
                  >
                    <div className="burger_container">
                      <div className="container">
                        <div className="burger_hero">
                          {/*<Link*/}
                          {/*  to="/"*/}
                          {/*  className="logo_burger"*/}
                          {/*  onClick={changePage}*/}
                          {/*>*/}
                          {/*  <img src={logo} alt="" />*/}
                          {/*</Link>*/}
                          <Link to="/" onClick={changePage}>
                            <h1 className={"logoText"}>KidQuizIt</h1>
                            {/*<img src={logo} className="logo" alt="" />*/}
                          </Link>
                          <div className="burger_links">
                            <div className="burger_links_standart">
                              <Link to="/about" onClick={changePage}>
                                About us
                              </Link>
                              <Link to="/contacts" onClick={changePage}>
                                Contacts
                              </Link>
                            </div>
                            <div className="burger_links_cat">
                              {categories.map(
                                (cat: categoryData, index: number) => {
                                  if (cat.title.includes("Logic Puzzles"))
                                    return;
                                  return (
                                    <div
                                      key={`${cat.id}${cat.title}${index}`}
                                      className="burger_cat_item"
                                      onClick={() => changeCurrentCat(index)}
                                    >
                                      <div className="burger_cat_item_title">
                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: cat.title,
                                          }}
                                        ></p>
                                        <IoIosArrowDown />
                                      </div>
                                      {catItem == index && (
                                        <AnimatePresence>
                                          <motion.div
                                            initial={{ y: "-30%" }}
                                            animate={{ y: "0" }}
                                            exit={{ y: "-30%" }}
                                            className="burger_cat_dropdown"
                                          >
                                            {cat.child_categories.map((a) => {
                                              return (
                                                <Link
                                                  key={`${a.id}${a.title}${a.parent_id}`}
                                                  to={`/catalog/${a.parent_id}/${a.id}`}
                                                  onClick={changePage}
                                                >
                                                  <p
                                                    dangerouslySetInnerHTML={{
                                                      __html: a.title,
                                                    }}
                                                  ></p>
                                                </Link>
                                              );
                                            })}
                                          </motion.div>
                                        </AnimatePresence>
                                      )}
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div className="contact_burger">
                            <Link to="mailto:support@kidquizit.com">
                              <AiOutlineMail />
                              support@kidquizit.com
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FaXmark onClick={closeBurger} className="burger_close" />
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
