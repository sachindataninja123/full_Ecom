import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [subMenuIdx, setSubMenuIdx] = useState(null);
  const [innerSubMenuIdx, setInnerSubMenuIdx] = useState(null);

  const openSubMenu = (index) => {
    if (subMenuIdx === index) {
      setSubMenuIdx(null);
    } else {
      setSubMenuIdx(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innerSubMenuIdx === index) {
      setInnerSubMenuIdx(null);
    } else {
      setInnerSubMenuIdx(index);
    }
  };

  return (
    <>
      <div className="scroll">
        <ul className="w-full ">
          <li className="list-none flex items-center justify-between relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full px-3!  text-left! text-[#222]!  justify-start!  ">
                Fashion
              </Button>
            </Link>

            {subMenuIdx === 0 ? (
              <FaRegSquareMinus
                className="absolute top-2 right-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubMenu(0);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-2 right-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubMenu(0);
                }}
              />
            )}

            {subMenuIdx === 0 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full px-3!  text-left! text-[#222]! justify-start! capitalize! ">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubMenuIdx === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-2 right-5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubMenu(0);
                      }}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-2 right-5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubMenu(0);
                      }}
                    />
                  )}

                  {innerSubMenuIdx === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left!  justify-start! capitalize! "
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left!  justify-start! capitalize! "
                        >
                          Crapr T-Shirt
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left! justify-start! capitalize! "
                        >
                          Leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left! justify-start! capitalize! "
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center justify-between relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full px-3!  text-left! text-[#222]!  justify-start!  ">
                Electronics
              </Button>
            </Link>

            {subMenuIdx === 1 ? (
              <FaRegSquareMinus
                className="absolute top-2 right-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubMenu(1);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-2 right-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubMenu(1);
                }}
              />
            )}

            {subMenuIdx === 1 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full px-3!  text-left! text-[#222]! justify-start! capitalize! ">
                      Electrics
                    </Button>
                  </Link>
                  {innerSubMenuIdx === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-2 right-5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubMenu(1);
                      }}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-2 right-5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubMenu(1);
                      }}
                    />
                  )}

                  {innerSubMenuIdx === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left!  justify-start! capitalize! "
                        >
                          Fan
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left!  justify-start! capitalize! "
                        >
                          AC
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left! justify-start! capitalize! "
                        >
                          Refrigator
                        </Link>
                      </li>

                      <li className="list-none relative mt-1">
                        <Link
                          to="/"
                          className="link w-full px-3! font-semibold text-[14px] text-left! justify-start! capitalize! "
                        >
                          Cooler
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
