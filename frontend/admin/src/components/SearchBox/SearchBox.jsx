import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="w-full h-10  bg-gray-100 relative">
      <IoSearch size={20} className="absolute left-2 top-2.75 z-50 pointer-events-none text-[#787777]" />
      <input
        type="text"
        className="w-full h-10 border border-[rgba(0,0,0,0.1)] rounded-sm px-2 py-2.5 pl-8 text-[17px] focus:border-[rgba(0,0,0,0.1)] "
        name=""
        id=""
        placeholder="Search here..."
      />
    </div>
  );
};

export default SearchBox;
