import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
      <div className="w-full h-52 bg-green">
        <Wrapper>
          <div className="w-full h-52 bg-green pt-10 pb-0 flex items-start justify-between">
            <div className="w-1/4 h-full flex items-start justify-start">
              <Link to="/">
                <h2 className="text-5xl text-yellow font-main font-medium ">
                  KidQuizzIt
                </h2>
              </Link>
            </div>
            <ul className="w-1/4 h-full flex-col items-start justify-start space-x-20">
              {navPages.map((item) => {
                return (
                  <li className="w-full ml-0 pl-0  mb-3">
                    <Link
                      to={item.to}
                      className="w-full text-left m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300"
                    >
                      {item.page}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="w-1/4 h-full flex-col items-start justify-start space-x-20">
              <li className="w-full m-0 mb-3">
                <Link
                  to="/privacy/policy"
                  className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300"
                >
                  Privacy and Policy
                </Link>
              </li>
              <li className="w-full  m-0">
                <Link
                  to="/privacy/terms"
                  className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300"
                >
                  Terms and condisions
                </Link>
              </li>
            </ul>
            <div className="w-1/4 h-full flex-col items-start justify-start ">
              <h2 className="w-full text-left  m-0 text-xl text-white font-main font-medium mb-3">
                Contact Info:
              </h2>
              <ul className="space-x-20 h-full flex-col items-start justify-start ">
                <li className="w-full m-0 mb-1">
                  <Link
                    to="tel:79999999999"
                    className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
                  >
                    <FaPhoneAlt className="text-lg mr-2" /> +7-999-999-99-99
                  </Link>
                </li>
                <li className="w-full m-0 mb-1">
                  <Link
                    to="mailto:fakemail@gmail.com"
                    className="w-full text-left  m-0 text-xl text-white font-main font-medium hover:text-yellow transition-all duration-300 flex justify-start items-center space-x-2"
                  >
                    <AiOutlineMail className="text-xl mr-2" />{" "}
                    fakemail@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="w-full h-1 bg-yellow"></div>
      <div className="w-full h-14 bg-darkGreen">
        <Wrapper>
          <div className="w-full bg-darkGreen flex justify-end items-center pt-4">
            <Link
              to=""
              className=" font-main text-lg text-white hover:text-yellow transition-all duration-300"
            >
              © This page was last edited on 22 October 2023
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Footer;
