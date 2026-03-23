import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaRegPlusSquare } from "react-icons/fa";
import Button from "@mui/material/Button";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CategoryPanel = ({ setOpenCatPanel, openCatPanel }) => {
  const toggleDrawer = (newOpen) => () => {
    setOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h3 className="p-3 flex items-center justify-between text-[16px] font-semibold">
        Shop By Categories
        <RxCross2
          className="text-2xl cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full ">
          <li className="list-none flex items-center justify-between relative">
            <Link to="/" className="w-full">
              <Button className="w-full px-3!  text-left! text-[#222]!  justify-start!  ">
                Fashion
              </Button>
            </Link>
            <FaRegPlusSquare className="absolute top-2 right-5 cursor-pointer" />

            <ul className="submenu absolute top-full left-[0%] w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full px-3!  text-left! text-[#222]! justify-start! capitalize! ">
                    Apparel
                  </Button>
                </Link>
                <FaRegPlusSquare className="absolute top-2 right-5 cursor-pointer" />

                <ul className="submenu absolute top-full left-[0%] w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link w-full px-3! font-semibold text-[14px] text-left! text-[#222]! justify-start! capitalize! "
                    >
                      Apparel
                    </Link>
                  </li>

                  <li className="list-none relative mt-0.5">
                    <Link
                      to="/"
                      className="link w-full px-3! font-semibold text-[14px] text-left! text-[#222]! justify-start! capitalize! "
                    >
                      Apparel
                    </Link>
                  </li>

                  <li className="list-none relative mt-0.5">
                    <Link
                      to="/"
                      className="link w-full px-3! font-semibold text-[14px] text-left! text-[#222]! justify-start! capitalize! "
                    >
                      Apparel
                    </Link>
                  </li>

                  <li className="list-none relative mt-0.5">
                    <Link
                      to="/"
                      className="link w-full px-3! font-semibold text-[14px] text-left! text-[#222]! justify-start! capitalize! "
                    >
                      Apparel
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={openCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
