import React, { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { ProductviewContext } from "../../../context/MyContext";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { fetchDataFromApi, postData } from "../../../utils/api";

const LogDropDown = () => {
  const { isLoggedIn, setIsLoggedIn, openAlertBox, userData } =
    useContext(ProductviewContext);

  const history = useNavigate();

  // Full fixed handleLogOut
  const handleLogOut = async () => {
    try {
      await fetchDataFromApi("/api/user/logout");
    } catch (error) {
      console.log("Logout API error:", error);
    } finally {
      // Always clear local state even if API fails
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userEmail");
      setIsLoggedIn(false);
      openAlertBox("success", "Logged out successfully");
      history("/");
    }
  };

  return (
    <div className="relative z-999">
      <div className="relative group">
        {/* Trigger */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaRegUserCircle className="text-xl" />
          <p className="text-[15px]">{isLoggedIn ? "My Account" : "Login"}</p>
          <IoIosArrowDown className="group-hover:rotate-180 transition" />
        </div>

        {/* Dropdown */}
        <div
          className="absolute top-10 left-0 w-50 bg-white shadow-xl rounded-md 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 z-999"
        >
          {/* NOT LOGGED IN */}
          {!isLoggedIn && (
            <div className="px-3 py-2 flex flex-col gap-2">
              <Link
                to="/login"
                className="btn-org text-center py-1 transition-all hover:bg-gray-900! text-sm rounded-md"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn-border py-1 flex-1 text-center  rounded-md font-semibold  transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* LOGGED IN */}
          {isLoggedIn && (
            <>
              <div className="p-3 border-b flex justify-between items-center">
                <p className="text-sm line-clamp-1">
                  Hello,{" "}
                  <span className="font-medium  text-[17px] text-[#ff5252]">
                    {userData?.name}
                  </span>{" "}
                  👋
                </p>
              </div>

              <ul className="text-sm">
                <li>
                  <Link
                    to="/myprofile"
                    className=" px-3 py-2 hover:bg-gray-100 flex items-center justify-start gap-2"
                  >
                    <FaRegUser size={16} />
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link
                    to="/myorders"
                    className=" px-3 py-2 hover:bg-gray-100 flex items-center justify-start gap-2"
                  >
                    <IoBagHandleOutline size={16} />
                    Orders
                  </Link>
                </li>

                <li>
                  <Link
                    to="/mywishlist"
                    className="px-3 py-2 hover:bg-gray-100 flex items-center justify-start gap-2"
                  >
                    <FaRegHeart size={16} />
                    Wishlist
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500 font-semibold flex items-center justify-start gap-2 cursor-pointer"
                  >
                    <MdOutlineLogout size={16} />
                    Logout
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogDropDown;
