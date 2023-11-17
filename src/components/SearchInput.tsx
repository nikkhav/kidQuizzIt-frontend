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
    <div className="flex justify-center items-center w-3/4 mx-auto h-14 mb-16">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-gray border-2 w-10/12 rounded-s-xl h-full outline-none px-8 text-xl font-main font-normal"
        placeholder="Search here..."
      />
      <button
        onClick={changeProds}
        className="w-2/12 h-full bg-green rounded-e-xl text-white cursor-pointer font-main font-medium text-2xl"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
