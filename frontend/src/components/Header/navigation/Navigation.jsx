import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [openCatPanel, setOpenCatPanel] = useState(false);

  function openCategoryPanel() {
    setOpenCatPanel(true);
  }

  return (
    <>
      <nav className="p-2 border-t border-gray-200">
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
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-medium"
                >
                  Fashion
                </Link>
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
