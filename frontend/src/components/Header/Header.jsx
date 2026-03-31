import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { FaRegHeart } from "react-icons/fa";
import LogDropDown from "./loginDropdown/LogDropDown";
import { BsCart3 } from "react-icons/bs";
import Announce from "./AnnouncementBar/Announce";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Navigation from "./navigation/Navigation";
import { IoIosGitCompare } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container ">
          <Announce />

          <div className="flex items-center justify-between px-2  py-3">
            {/* Logo */}
            <div className="h-13 w-44.5 ">
              <Link to="/">
                <img
                  className="h-full w-full object-cover"
                  src="/logo2.svg"
                  alt="logo"
                />
              </Link>
            </div>

            {/* Search */}
            <div className="flex-1 mx-8">
              <Search />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <LogDropDown />

              {/* Wishlist */}
              <div className="relative">
                <IconButton>
                  <FaRegHeart className="text-[24px] text-black" />
                </IconButton>

                <span className="absolute top-0.5 right-0.5 h-5 w-5 flex items-center justify-center text-white text-[14px] bg-[#ff5252] rounded-full">
                  0
                </span>
              </div>

              {/* Comapare */}
              <div className="relative">
                <IconButton>
                  <IoIosGitCompare className="text-[24px] text-black" />
                </IconButton>

                <span className="absolute top-0.5 right-0.5 h-5 w-5 flex items-center justify-center text-white text-[14px] bg-[#ff5252] rounded-full">
                  0
                </span>
              </div>

              {/* Cart */}
              <div className="relative">
                <IconButton>
                  <BsCart3 className="text-[24px] text-black" />
                </IconButton>

                <span className="absolute top-0.5 right-1 h-5 w-5 flex items-center justify-center text-white text-[14px] bg-[#ff5252] rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
