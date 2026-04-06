import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross2 } from "react-icons/rx";
import "./style.css";
import CategoryCollapse from "../../CategoryCollapse/CategoryCollapse";

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

      <CategoryCollapse />
    </Box>
  );

  return (
    <Drawer open={openCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
