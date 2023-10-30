import React from "react";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contacts() {
  return (
    <Wrapper>
      <div className="w-full flex-col items-center justify-center">
        <h1 className="w-full my-16 mx-auto text-center text-7xl font-main font-semibold">
          Contact us
        </h1>
        <div className="w-full flex justify-between items-start mt-6 mb-16">
          <form className="w-2/3 flex justify-start flex-wrap items-start bg-darkGreen p-5 rounded-3xl">
            <label htmlFor="" className="w-1/2 pr-8">
              <p className="font-main font-medium text-white text-xl mb-2">
                First Name
              </p>
              <input
                type="text"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow "
              />
            </label>
            <label htmlFor="" className="w-1/2 pr-8">
              <p className="font-main font-medium text-white text-xl mb-2">
                Last Name
              </p>
              <input
                type="text"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              />
            </label>
            <label htmlFor="" className="w-full mt-5 mb-1 pr-8">
              <p className="font-main font-medium text-white text-xl mb-2">
                Email address
              </p>
              <input
                type="email"
                className="w-full border-2 border-white h-12 rounded-lg px-4 font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              />
            </label>
            <label htmlFor="" className="w-full my-7 pr-8">
              <p className="font-main font-medium text-white text-xl mb-2">
                Message
              </p>
              <textarea
                name=""
                className="w-full h-32 p-4  border-2 border-white rounded-lg font-main font-normal text-black text-lg focus:outline-none focus:border-yellow"
              ></textarea>
              <div className="w-full flex items-center justify-center mt-7">
                <button className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 font-main font-medium text-white text-lg transition-all duration-300 hover:bg-white hover:text-darkGreen">
                  Send message
                </button>
              </div>
            </label>
          </form>
          <div className="w-1/3 pl-8 flex-col items-start justify-start">
            <div className="flex-col items-start justify-start w-full mb-10">
              <h2 className="mb-5 text-3xl font-medium font-main text-black">
                Phone:
              </h2>
              <div >
                <Link to="" className="font-main text-black text-2xl flex justify-start items-center transition-all duration-300 hover:text-yellow">
                  <FaPhoneAlt className="text-xl mr-2" />
                  +7-999-999-99-99
                </Link>
              </div>
            </div>
            <div className="flex-col items-start justify-start w-full">
              <h2 className="mb-5 text-3xl font-medium font-main text-black">
                Email:
              </h2>
              <div >
                <Link to="" className="font-main text-black text-2xl flex justify-start items-center transition-all duration-300 hover:text-yellow">
                  <AiOutlineMail className="text-2xl mr-2" /> fakemail@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contacts;
