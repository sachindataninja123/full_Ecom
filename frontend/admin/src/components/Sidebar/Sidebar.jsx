import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbSlideshow, TbCategory2 } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { IoBagCheckOutline, IoLogOutOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { MyContext } from "../../context/MyContext";

const SideBar = () => {
  const [subMenuIdx, setSubMenuIdx] = useState(null);

  const toggleMenu = (idx) => {
    setSubMenuIdx(subMenuIdx === idx ? null : idx);
  };

  const { isOpenFullScreenPanel, setIsOpenFullScreenPanel } =
    useContext(MyContext);

  const menuClass =
    "flex items-center gap-3 px-3 py-2 rounded-md text-[15px] font-medium transition-all duration-200";

  const subMenuClass =
    "flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 transition-all cursor-pointer";

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-white border-r border-gray-300 shadow-sm p-4">
      {/* LOGO */}
      <NavLink to="/admin">
        <img src="/logofably.png" className="w-36 mb-6" />
      </NavLink>

      <ul className="space-y-2">
        {/* DASHBOARD */}
        <li>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-[#ff5252] text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-black"
              }`
            }
          >
            <RxDashboard /> Dashboard
          </NavLink>
        </li>

        {/* HOME SLIDES */}
        <li>
          <button
            onClick={() => toggleMenu(1)}
            className={`${menuClass} w-full text-left text-gray-700 hover:bg-gray-100`}
          >
            <TbSlideshow /> Home Slides
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 1 ? "rotate-180" : ""
              }`}
            />
          </button>

          <Collapse isOpened={subMenuIdx === 1}>
            <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <NavLink to="/admin/home-slides" className={subMenuClass}>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Home Slide List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={subMenuClass}
                  onClick={() =>
                    setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add Home Slide",
                    })
                  }
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
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
            <LuUsers /> Users
          </NavLink>
        </li>

        {/* PRODUCTS */}
        <li>
          <button
            onClick={() => toggleMenu(3)}
            className={`${menuClass} w-full text-left text-gray-700 hover:bg-gray-100`}
          >
            <LiaProductHunt /> Products
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 3 ? "rotate-180" : ""
              }`}
            />
          </button>

          <Collapse isOpened={subMenuIdx === 3}>
            <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <NavLink to="/admin/products" className={subMenuClass}>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Product List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={subMenuClass}
                  onClick={() =>
                    setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add Product",
                    })
                  }
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Product Upload
                </NavLink>
              </li>
            </ul>
          </Collapse>
        </li>

        {/* CATEGORY */}
        <li>
          <button
            onClick={() => toggleMenu(4)}
            className={`${menuClass} w-full text-left text-gray-700 hover:bg-gray-100`}
          >
            <TbCategory2 /> Category
            <FaAngleDown
              className={`ml-auto transition ${
                subMenuIdx === 4 ? "rotate-180" : ""
              }`}
            />
          </button>

          <Collapse isOpened={subMenuIdx === 4}>
            <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <NavLink to="/admin/category" className={subMenuClass}>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Category List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={subMenuClass}
                  onClick={() =>
                    setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add New Category",
                    })
                  }
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Add Category
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/sub-category" className={subMenuClass}>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Sub Category List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={subMenuClass}
                  onClick={() =>
                    setIsOpenFullScreenPanel({
                      open: true,
                      model: "Add New Sub Category",
                    })
                  }
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Add Sub Category
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
            <IoBagCheckOutline /> Orders
          </NavLink>
        </li>

        {/* LOGOUT */}
        <li>
          <button
            className={`${menuClass} w-full text-left text-red-500 hover:bg-red-50`}
          >
            <IoLogOutOutline /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
