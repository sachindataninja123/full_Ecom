import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const LogDropDown = () => {
  return (
    <div>
      <div className="relative group">
        {/* Trigger */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaRegUserCircle className="text-xl" />
          <p className="text-[15px]">Login</p>
          <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
        </div>

        {/* Dropdown */}
        <div className="absolute top-10 left-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 shadow-sm"></div>

          <div className="p-3 border-b flex justify-between items-center">
            <p className="text-sm">New Customer?</p>
            <button className="text-blue-500 text-sm font-semibold">
              Sign Up
            </button>
          </div>

          <ul className="text-sm">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              My Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Orders
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Wishlist
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Rewards
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Gift Cards
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogDropDown;
