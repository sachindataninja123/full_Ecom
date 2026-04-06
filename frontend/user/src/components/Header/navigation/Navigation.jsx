import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";
import "./style.css";

const Navigation = () => {
  const [openCatPanel, setOpenCatPanel] = useState(false);

  function openCategoryPanel() {
    setOpenCatPanel(true);
  }

  return (
    <>
      <nav className="border-t border-gray-200">
        <div className="container flex items-center justify-between gap-7">
          <div className="col_1 w-[20%]">
            <Button
              className="text-black! gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <IoIosArrowDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%] uppercase">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Home
                </Link>
              </li>

              <li className="list-none relative group/cat">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium hover:text-[#ff5252] py-8!"
                >
                  Fashion
                </Link>

                <div
                  className="submenu absolute top-[120%] left-0 min-w-45 bg-white shadow-md 
                  opacity-0 transition-all 
                  group-hover/cat:opacity-100 group-hover/cat:top-full"
                >
                  <ul>
                    {/* Men — has inner submenu */}
                    <li className="list-none w-full relative group/men">
                      <Link to="/" className="w-full">
                        <Button
                          className="text-[rgba(0,0,0,0.8)]! w-full! justify-start! 
                             rounded-none! hover:bg-[#f1f1f1]! 
                             hover:text-[#ff5252]! transition-all!"
                        >
                          Men
                        </Button>
                      </Link>

                      {/* ✅ Submenu is OUTSIDE Link, INSIDE li.group/men */}
                      <div
                        className="absolute top-[0%] left-full min-w-45 bg-white shadow-md 
                        opacity-0 pointer-events-none transition-all
                        group-hover/men:opacity-100 group-hover/men:pointer-events-auto"
                      >
                        <ul>
                          {[
                            "T-shirts",
                            "Shirts",
                            "Joggers",
                            "Pants",
                            "InnerWear",
                          ].map((item) => (
                            <li key={item} className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button
                                  className="text-[rgba(0,0,0,0.8)]! w-full! justify-start! 
                                     rounded-none! hover:bg-[#f1f1f1]! 
                                     hover:text-[#ff5252]! transition-all!"
                                >
                                  {item}
                                </Button>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    {/* Women, Girls, Boys, Kids — NO inner submenu, hover color only */}
                    {["Women", "Girls", "Boys", "Kids"].map((item) => (
                      <li key={item} className="list-none w-full">
                        <Link to="/" className="w-full">
                          <Button
                            className="text-[rgba(0,0,0,0.8)]! w-full! justify-start! 
                               rounded-none! hover:bg-[#f1f1f1]! 
                               hover:text-[#ff5252]! transition-all!"
                          >
                            {item}
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Footwear
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-medium flex items-center gap-3 mb-0 mt-0 w-full">
              <MdOutlineRocketLaunch className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* category panel */}
      <CategoryPanel
        setOpenCatPanel={setOpenCatPanel}
        openCatPanel={openCatPanel}
      />
    </>
  );
};

export default Navigation;
