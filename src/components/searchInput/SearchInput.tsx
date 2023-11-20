import React, { useState } from "react";
import "./searchInput.css";
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
    <div className="search">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search here..."
      />
      <button onClick={changeProds}>Search</button>
    </div>
  );
};

export default SearchInput;
