import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { IoIosArrowDown } from "react-icons/io";

const Catalog: React.FC = () => {
  // const [currretCat, setCurrentCat] = useState<number | null>(null);
  // const changeCat = (index: number) => {
  //   if (currretCat == index) {
  //     setCurrentCat(null);
  //   } else {
  //     setCurrentCat(index);
  //   }
  // };
  return (
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
          {/* <div className="w-1/4 border-gray border-2 px-5 py-5 flex rounded-xl flex-col justify-start items-start gap-2">
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
                    {cat.child_categories.map((child: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className="mb-2 border-b-2 border-gray w-full font-main font-normal text-lg text-black cursor-pointer hover:text-yellow transition-all duration-300"
                        >
                          {child.title}
                        </li>
                      );
                    })}
                  </ul>
                </label>
              );
            })}
          </div> */}
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Catalog;
