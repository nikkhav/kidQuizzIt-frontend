import "./header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { disableScroll, enableScroll } from "../../hooks/scrool";
import logo from "../../icons/logo-png-removebg-preview.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCategory } from "../../store/actions/categoryAction";
import Loading from "../loading/Loading";
import { IoGameController } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { ImTarget } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiFairy } from "react-icons/gi";
import { BsPatchQuestionFill } from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
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
  const dispatch = useAppDispatch();
  const { category, errorCategory, loadingCategory } = useAppSelector(
    (state) => state.category
  );
  useEffect(() => {
    fetchCategory()(dispatch);
  }, [dispatch]);

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

  const changeCat = () => {
    setDrop(false);
    setBurger(false);
    enableScroll();
  };
  return (
    <>
      {errorCategory && <p>{errorCategory}</p>}
      {loadingCategory && <Loading />}
      {category && (
        <>
          <div className="header_top_bg">
            <div className="container">
              <div className="header_top">
                <Link to="/" className="logo_link">
                  <img src={logo} className="logo" alt="" />
                </Link>
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
                  <img src={logo} className="logo" alt="" />
                </Link>
                <nav>
                  {category.map((cat, index) => {
                    return (
                      <>
                        <div
                          key={`${cat.title}${index + 1}${cat.id}`}
                          className="nav_item"
                        >
                          {index == 0 ? (
                            <FaPlayCircle />
                          ) : index == 1 ? (
                            <MdOutlinePets />
                          ) : index == 2 ? (
                            <BsPatchQuestionFill />
                          ) : index == 3 ? (
                            <ImTarget />
                          ) : index == 4 ? (
                            <GiFairy />
                          ) : (
                            <IoGameController />
                          )}
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
                              >
                              </Link>
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
                          <Link
                            to="/"
                            className="logo_burger"
                            onClick={changePage}
                          >
                            <img src={logo} alt="" />
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
                              {category.map((cat, index: number) => {
                                return (
                                  <div
                                    key={`${cat.id}${cat.title}${index}`}
                                    className="burger_cat_item"
                                    onClick={() => changeCurrentCat(index)}
                                  >
                                    <div className="burger_cat_item_title">
                                      <p>{cat.title}</p>
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
                                                {a.title}
                                              </Link>
                                            );
                                          })}
                                        </motion.div>
                                      </AnimatePresence>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="contact_burger">
                            <Link to="#">
                              <FaPhoneAlt />
                              +79999999999
                            </Link>
                            <Link to="#">
                              <AiOutlineMail />
                              fake@mail.ru
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
