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
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

type navPagesType = {
  page: string;
  to: string;
};

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
  const navPages: navPagesType[] = [
    {
      page: "Catalog",
      to: "/catalog",
    },
    {
      page: "About Us",
      to: "/about",
    },
    {
      page: "Contact Us",
      to: "/contacts",
    },
  ];

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
        // <>
        //   <div className="w-full h-12 bg-darkGreen hidden md:block">
        //     <Wrapper>
        //       <div className="w-full h-full flex justify-end items-center space-x-3 pt-0.5">
        //         <ul className="space-x-20 h-6 pt-6 flex items-center justify-end">
        //           <li className="w-full mr-10">
        //             <Link
        //               to="tel:79999999999"
        //               className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
        //             >
        //               <FaPhoneAlt className="text-lg mr-2" /> +7-999-999-99-99
        //             </Link>
        //           </li>
        //           <li className="w-full ">
        //             <Link
        //               to="mailto:support@kidquizit.com"
        //               className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
        //             >
        //               <AiOutlineMail className="text-xl mr-2" />{" "}
        //               support@kidquizit.com
        //             </Link>
        //           </li>
        //         </ul>
        //       </div>
        //     </Wrapper>
        //   </div>
        //   <div className="w-full h-1 bg-yellow  hidden md:block"></div>
        //   <div className="w-full  h-16 md:h-24 bg-green mb-10 md:mb-24 relative">
        //     <Wrapper>
        //       <header className=" mt-auto h-16 md:h-24 flex justify-between items-center ">
        //         <Link
        //           to="/"
        //           className="text-2xl md:text-4xl text-yellow font-main font-medium inline-block w-44 sm:w-56 lg:w-72"
        //         >
        //           <img src={logo} alt="" className="w-full" />
        //         </Link>
        //         <nav className="justify-end space-x-6   z-0 hidden md:flex">
        //           {navPages.map((item: navPagesType, index: number) => {
        //             if (index != 0) {
        //               return (
        //                 <Link
        //                   to={item.to}
        //                   key={index}
        //                   className={
        //                     "text-lg  hover:border-b-2 hover:border-yellow border-b-0 text-white font-main font-medium hover:text-yellow transition-all duration-200"
        //                   }
        //                 >
        //                   {item.page}
        //                 </Link>
        //               );
        //             } else {
        //               return (
        //                 <div
        //                   onClick={() => setDrop((drop) => !drop)}
        //                   key={index}
        //                   className={
        //                     "flex cursor-pointer hover:border-b-2 hover:border-yellow border-b-0 items-center text-lg text-white font-main font-medium hover:text-yellow transition-all duration-300 "
        //                   }
        //                 >
        //                   <p>{item.page}</p>
        //                   <RiArrowDropDownLine className="text-3xl" />
        //                 </div>
        //               );
        //             }
        //           })}
        //           {drop && (
        //             <AnimatePresence>
        //               <motion.ul
        //                 initial={{ y: "-100%" }}
        //                 animate={{ y: 0 }}
        //                 exit={{ y: "-100%" }}
        //                 data-value="headerDropdown"
        //                 ref={dropRef}
        //                 className="absolute z-20 -bottom-20 w-full -right-0  h-20 bg-green "
        //               >
        //                 <Wrapper>
        //                   <div className="flex justify-between items-center px-3 lg:pl-7 lg:pr-5 xl:pl-40 xl:pr-20 h-20">
        //                     {category &&
        //                       category.map((cat: any, index: number) => {
        //                         return index != category.length - 1 ? (
        //                           <li
        //                             key={index}
        //                             className="w-1/4 h-full flex items-center justify-start relative before:absolute before:w-1 before:h-6 before:bg-yellow before:right-8"
        //                           >
        //                             <Link
        //                               className="catalog-item"
        //                               to={`/catalog${
        //                                 cat.id ? `/${cat.id}` : ""
        //                               }`}
        //                               onClick={changeCat}
        //                             >
        //                               {cat.title}
        //                             </Link>
        //                           </li>
        //                         ) : (
        //                           <li
        //                             key={index}
        //                             className="w-1/5 h-full flex items-center justify-start"
        //                           >
        //                             <Link
        //                               className="catalog-item"
        //                               to={`/catalog${
        //                                 cat.id ? `/${cat.id}` : ""
        //                               }`}
        //                               onClick={changeCat}
        //                             >
        //                               {cat.title}
        //                             </Link>
        //                           </li>
        //                         );
        //                       })}
        //                   </div>
        //                 </Wrapper>
        //               </motion.ul>
        //             </AnimatePresence>
        //           )}
        //         </nav>
        //         <HiMenu
        //           onClick={burgerOpen}
        //           className="block md:hidden text-4xl font-main font-bold text-yellow"
        //         />
        //       </header>
        //     </Wrapper>
        //   </div>
        //   {burger && (
        //     <AnimatePresence>
        //       <motion.div
        //         initial={{ y: "-100%" }}
        //         animate={{ y: "0" }}
        //         exit={{ y: "-100%" }}
        //         className="absolute transition-transform duration-500 top-0 left-0 w-full h-screen bg-green flex-col justify-between items-start p-5 pb-8 z-30"
        //       >
        //         <div className="h-full flex flex-col justify-between">
        //           <Link
        //             to="/"
        //             className="text-4xl text-yellow font-main font-medium text-center flex justify-center w-56 sm:w-72 h-20 mx-auto"
        //           >
        //             <img
        //               src={logo}
        //               alt=""
        //               className="w-full h-full mx-auto object-cover"
        //             />
        //           </Link>
        //           <ul className="w-full gap-4 flex flex-col justify-center items-center px-5 sm:px-10">
        //             <div className="w-full mx-auto grid grid-cols-2 gap-4">
        //               <li className="text-left">
        //                 <Link
        //                   to="/about"
        //                   className="text-left text-lg sm:text-xl md:text-3xl font-main text-white font-normal"
        //                   onClick={changePage}
        //                 >
        //                   About Us
        //                 </Link>
        //               </li>
        //               <li className="text-left">
        //                 <Link
        //                   to="/contacts"
        //                   className="text-left text-lg sm:text-xl md:text-3xl font-main text-white font-normal"
        //                   onClick={changePage}
        //                 >
        //                   Contacts
        //                 </Link>
        //               </li>
        //             </div>
        //             <div className="w-full mx-auto grid grid-cols-2 gap-4">
        //               {category &&
        //                 category.map((cat: any) => {
        //                   return (
        //                     <li className="text-left">
        //                       <Link
        //                         to={`/catalog${cat.id ? `/${cat.id}` : ""}`}
        //                         className="text-left text-lg sm:text-xl md:text-3xl font-main text-white font-normal"
        //                       >
        //                         {cat.title}
        //                       </Link>
        //                     </li>
        //                   );
        //                 })}
        //             </div>
        //           </ul>
        //           <ul className="w-full flex flex-col items-center  justify-center sm:flex-row">
        //             <li className="w-full">
        //               <Link
        //                 to="tel:79999999999"
        //                 className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-center sm:justify-start items-center space-x-2"
        //               >
        //                 <FaPhoneAlt className="text-lg mr-2" /> +7-999-999-99-99
        //               </Link>
        //             </li>
        //             <li className="w-full">
        //               <Link
        //                 to="mailto:support@kidquizit.com"
        //                 className="w-full   m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-center sm:justify-end items-center mt-4 sm:mt-0 space-x-2"
        //               >
        //                 <AiOutlineMail className="text-xl mr-2" />{" "}
        //                 support@kidquizit.com
        //               </Link>
        //             </li>
        //           </ul>
        //         </div>
        //         <FaXmark
        //           className="absolute z-50 top-3 right-3 sm:top-5 sm:right-5 text-3xl sm:text-4xl text-white"
        //           onClick={closeBurger}
        //         />
        //       </motion.div>
        //     </AnimatePresence>
        //   )}
        // </>
        <>
          <div className="header_top_bg">
            <div className="container">
              <div className="header_top">
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
                          key={`${cat.title}${cat.id}${index}`}
                          className="nav_item"
                        >
                          {index == 0 ? (
                            <FaPlayCircle />
                          ) : index == 1 ? (
                            <MdOutlinePets />
                          ) : index == 2 ? (
                            <IoGameController />
                          ) : (
                            <ImTarget />
                          )}
                          <h3>{cat.title}</h3>
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
                              >
                                {a.title}
                              </Link>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                  <Link to="/about" className="else_links">
                    <FaPeopleRoof />
                    <h3>About us</h3>
                  </Link>
                  <Link to="/contacts" className="else_links">
                    <MdContactPhone />
                    <h3>Contacts</h3>
                  </Link>
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