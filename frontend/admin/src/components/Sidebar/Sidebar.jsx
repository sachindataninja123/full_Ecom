import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RxDashboard
} from "react-icons/rx";
import {
  TbSlideshow,
  TbCategory2
} from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import {
  IoBagCheckOutline,
  IoLogOutOutline
} from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";

const SideBar = () => {
  const [subMenuIdx, setSubMenuIdx] = useState(null);

  const toggleMenu = (idx) => {
    setSubMenuIdx(subMenuIdx === idx ? null : idx);
  };

  const menuClass =
    "flex items-center gap-3 px-3 py-2 rounded-md text-[15px] font-medium transition-all";

  return (
    <div className="fixed top-0 left-0 w-60 h-full bg-white border-r border-gray-300 shadow-sm p-4">

      {/* LOGO */}
      <NavLink to="/admin">
        <img src="/logofably.png" className="w-36 mb-6" />
      </NavLink>

      <ul className="space-y-2">

        {/* DASHBOARD */}
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-[#ff5252] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <RxDashboard className="text-[18px]"/> Dashboard
          </NavLink>
        </li>

        {/* HOME SLIDES */}
        <li>
          <div
            onClick={() => toggleMenu(1)}
            className={`${menuClass} cursor-pointer text-gray-700 hover:bg-gray-100`}
          >
            <TbSlideshow className="text-[18px]"/> Home Slides
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 1 ? "rotate-180" : ""
              }`}
            />
          </div>

          <Collapse isOpened={subMenuIdx === 1}>
            <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/home-slides">
                  Home Slide List
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/add-slide">
                  Add Home Banner
                </NavLink>
              </li>

            </ul>
          </Collapse>
        </li>

        {/* USERS */}
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-[#ff5252] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <LuUsers className="text-[18px]" /> Users
          </NavLink>
        </li>

        {/* PRODUCTS */}
        <li>
          <div
            onClick={() => toggleMenu(3)}
            className={`${menuClass} cursor-pointer text-gray-700 hover:bg-gray-100`}
          >
            <LiaProductHunt className="text-[18px]"/> Products
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 3 ? "rotate-180" : ""
              }`}
            />
          </div>

          <Collapse isOpened={subMenuIdx === 3}>
            <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/products">
                  Product List
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/add-product">
                  Product Upload
                </NavLink>
              </li>

            </ul>
          </Collapse>
        </li>

        {/* CATEGORY */}
        <li>
          <div
            onClick={() => toggleMenu(4)}
            className={`${menuClass} cursor-pointer text-gray-700 hover:bg-gray-100`}
          >
            <TbCategory2 className="text-[18px]" /> Category
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 4 ? "rotate-180" : ""
              }`}
            />
          </div>

          <Collapse isOpened={subMenuIdx === 4}>
            <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/category">
                  Category List
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/add-category">
                  Add Category
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <NavLink to="/admin/sub-category">
                  Sub Category List
                </NavLink>
              </li>

            </ul>
          </Collapse>
        </li>

        {/* ORDERS */}
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-[#ff5252] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <IoBagCheckOutline className="text-[18px]" /> Orders
          </NavLink>
        </li>

        {/* LOGOUT */}
        <li>
          <div className={`${menuClass} text-red-500 hover:bg-red-50 cursor-pointer`}>
            <IoLogOutOutline className="text-[18px]" /> Logout
          </div>
        </li>

      </ul>
    </div>
  );
};

export default SideBar;