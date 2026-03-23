import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full h-12 bg-[#e5e5e5] rounded-md relative">
      <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[23px] text-gray-500 pointer-events-none" />

      <input
        type="text"
        placeholder="Search for products, Brands and more"
        className="w-full h-full pl-11 pr-3 bg-transparent outline-none text-[17px] leading-none text-black font-medium"
      />
    </div>
  );
};

export default Search;
