import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../icons/logo-png-removebg-preview.png";

type navPagesType = {
  page: string;
  to: string;
};
const Footer: React.FC = () => {
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
  return (
    <>
      <div className="w-full bg-green">
        <Wrapper>
          <div className="w-full bg-green pt-10 pb-0 flex flex-wrap lg:flex-no-wrap items-start justify-between">
              <Link to="/" className="inline-block w-5/12 lg:order-none lg:w-1/4  sm:w-1/2 h-full items-start justify-start relative">
                <img src={logo} alt="" className="w-full h-24 object-cover sm:w-3/4 absolute -top-10 left-0" />
              </Link>
            <ul className="w-1/2 lg:order-none lg:w-1/4 h-full mb-3 flex-col order-2 items-start justify-start">
              {navPages.map((item, index) => {
                return (
                  <li className="w-full ml-0 pl-0 mb-1 xl:mb-3" key={index}>
                    <Link
                      to={item.to}
                      className="w-full  sm:text-xl xl:text-2xl text-left m-0 text-sm text-white font-main font-medium hover:text-yellow transition-all duration-300"
                    >
                      {item.page}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="w-1/2 lg:order-none lg:w-1/4 h-full flex-col order-3 items-end sm:items-start justify-start">
              <li className="w-full text-right sm:text-left m-0 mb-1 xl:mb-3">
                <Link
                  to="/privacy/policy"
                  className="w-full text-right sm:text-left sm:text-xl xl:text-2xl text-sm text-white font-main font-medium hover:text-yellow transition-all duration-300"
                >
                  Privacy and Policy
                </Link>
              </li>
              <li className="w-full text-right sm:text-left  m-0">
                <Link
                  to="/privacy/terms"
                  className="w-full text-right sm:text-left sm:text-xl xl:text-2xl text-sm text-white font-main font-medium hover:text-yellow transition-all duration-300"
                >
                  Terms and condisions
                </Link>
              </li>
            </ul>
            <div className="w-7/12 lg:order-none lg:w-1/4 sm:w-1/2 h-full flex-col ml-auto items-end sm:items-start justify-start mb-5">
              <h2 className="w-full text-right xl:text-2xl sm:text-left sm:text-xl  m-0 text-sm text-white font-main font-medium mb-3 xl:mb-4">
                Contact Info:
              </h2>
              <ul className="space-x-20 h-full flex-col items-end sm:items-start justify-start ">
                <li className="w-full m-0 mb-1 xl:mb-3">
                  <Link
                    to="tel:79999999999"
                    className="w-full text-right sm:text-left  m-0 sm:text-xl xl:text-2xl text-sm text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-end sm:justify-start items-center space-x-2"
                  >
                    <FaPhoneAlt className="text-xs sm:text-lg mr-1 xl:text-xl xl:mr-3" />{" "}
                    +7-999-999-99-99
                  </Link>
                </li>
                <li className="w-full m-0 mb-1 xl:mb-3">
                  <Link
                    to="mailto:fakemail@gmail.com"
                    className="w-full text-right sm:text-left  m-0 sm:text-xl xl:text-2xl text-sm text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-end sm:justify-start items-center space-x-2"
                  >
                    <AiOutlineMail className="text-sm sm:text-xl mr-2 xl:text-2xl xl:mr-3" />{" "}
                    fakemail@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="w-full h-1 bg-yellow"></div>
      <div className="w-full h-14 xl:h-16 bg-darkGreen">
        <Wrapper>
          <div className="w-full bg-darkGreen flex justify-center sm:justify-end items-center pt-4 xl:pt-4">
            <Link
              to=""
              className=" font-main text-sm sm:text-lg xl:text-2xl text-white hover:text-yellow transition-all duration-300"
            >
              © Page was last edited on 22 October 2023
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Footer;
