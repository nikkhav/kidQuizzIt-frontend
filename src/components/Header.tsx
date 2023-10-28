import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../hooks/useClickOutSide";
import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

type navPagesType = {
  page: string;
  to: string;
};
const Header = () => {
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
  return (
    <div className="w-full h-36 bg-green mb-20">
      <Wrapper>
        <div className="w-full h-full flex justify-end items-center space-x-3">
          <ul className="space-x-20 h-6 pt-6 flex items-center justify-end">
            <li className="w-full mr-10">
              <Link
                to="tel:79999999999"
                className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
              >
                <FaPhoneAlt className="text-lg mr-2" /> +7-999-999-99-99
              </Link>
            </li>
            <li className="w-full ">
              <Link
                to="mailto:fakemail@gmail.com"
                className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
              >
                <AiOutlineMail className="text-xl mr-2" /> fakemail@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
      <div className="w-full h-1 bg-yellow mt-7 mb-3"></div>
      <Wrapper>
        <header className=" mt-auto h-16 flex justify-between items-center ">
          <Link to="/" className="text-3xl text-yellow font-main font-medium">
            KidQuizzIt
          </Link>
          <nav className="flex justify-end space-x-6  relative z-0">
            {navPages.map((item: navPagesType, index: number) => {
              if (index != 0) {
                return (
                  <Link
                    to={item.to}
                    key={index}
                    className={
                      "text-lg text-white font-main font-medium hover:text-yellow transition-all duration-300"
                    }
                  >
                    {item.page}
                  </Link>
                );
              } else {
                return (
                  <div
                    onClick={() => setDrop((drop) => !drop)}
                    key={index}
                    className={
                      "flex cursor-pointer items-center space-x-2 text-lg text-white font-main font-medium hover:text-yellow transition-all duration-300 "
                    }
                  >
                    {item.page}
                    <RiArrowDropDownLine className="ml-0.5 text-3xl" />
                  </div>
                );
              }
            })}
            {drop && (
              <AnimatePresence>
                <motion.ul
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  data-value="headerDropdown"
                  ref={dropRef}
                  className="absolute z-20 -bottom-24 -right-2 w-96 flex justify-between items-center px-3 h-20 bg-green "
                >
                  <li>
                    <Link className="catalog-item" to="">
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link className="catalog-item" to="">
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link className="catalog-item" to="">
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link className="catalog-item" to="">
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link className="catalog-item" to="">
                      Catalog
                    </Link>
                  </li>
                </motion.ul>
              </AnimatePresence>
            )}
          </nav>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;
