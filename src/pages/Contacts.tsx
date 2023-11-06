import React from "react";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contacts() {
  return (
    <Wrapper>
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full flex-col items-center justify-center mb-20">
          <h2 className="items-center flex-col text-center text-black font-main font-bold text-5xl sm:text-7xl md:text-7xl lg:text-7xl">
            Contact us
            <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
          </h2>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:items-start lg:justify-start items-center mt-6 mb-16">
          <form className="w-full lg:w-3/5 lg:mr-3 flex justify-start flex-wrap items-start bg-darkGreen p-5 rounded-3xl">
            <label htmlFor="" className="w-full md:w-1/2 md:pr-3 ">
              <p className="font-main font-medium text-white text-xl mb-2">
                First Name
              </p>
              <input
                type="text"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow "
              />
            </label>
            <label
              htmlFor=""
              className="w-full md:w-1/2 md:pl-3 mt-7 md:mt-0 mb-3"
            >
              <p className="font-main font-medium text-white text-xl mb-2">
                Last Name
              </p>
              <input
                type="text"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              />
            </label>
            <label htmlFor="" className="w-full md:w-1/2 md:pr-3 mt-5 mb-3">
              <p className="font-main font-medium text-white text-xl mb-2">
                Email address
              </p>
              <input
                type="email"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              />
            </label>
            <label htmlFor="" className="w-full md:w-1/2 md:pl-3 mt-5 mb-3">
              <p className="font-main font-medium text-white text-xl mb-2">
                Phone number
              </p>
              <input
                type="phone"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              />
            </label>
            <label htmlFor="" className="w-full my-7">
              <p className="font-main font-medium text-white text-xl mb-2">
                Message
              </p>
              <textarea
                name=""
                className="w-full h-32 p-4  border-2 border-white rounded-lg font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              ></textarea>
            </label>
            <div className="w-full flex items-center justify-center mt-0 mb-3">
              <button className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 font-main font-medium text-white text-lg transition-all duration-300 hover:bg-white hover:text-darkGreen">
                Send message
              </button>
            </div>
          </form>
          <div className="w-full lg:w-2/5 flex-col lg:pl-3 items-center justify-center text-center mb-10">
            <h2 className="font-main font-medium text-center text-3xl lg:text-5xl text-black mb-2 lg:mb-5 flex justify-center items-center">
              WE CAN HELP!
            </h2>
            <p className="font-main font-normal text-center text-xl lg:text-2xl text-black flex justify-center items-center">
              Our team of experts is on hand to answer your questions
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contacts;
