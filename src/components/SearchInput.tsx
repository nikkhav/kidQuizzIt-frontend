import React, { useState } from "react";

type SearchInputProps = {
  searchProd: (arg: string) => void;
};
const SearchInput: React.FC<SearchInputProps> = ({ searchProd }) => {
  const [value, setValue] = useState<string>("");
  const changeProds = () => {
    searchProd(value);
    setValue("");
  };
  return (
    <div className="flex justify-center items-center w-full lg:w-3/4 lg:mx-auto mx-auto h-12 mb-10 md:h-16">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-gray border-2 w-9/12 rounded-s-xl h-full outline-none md:px-5 px-2 md:text-xl text-lg font-main font-normal"
        placeholder="Search here..."
      />
      <button
        onClick={changeProds}
        className="w-3/12 h-full bg-green rounded-e-xl text-white cursor-pointer font-main font-medium md:text-2xl text-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
