import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import toast, { Toaster } from "react-hot-toast";

import { createContext, useState } from "react";
import AddProducts from "../pages/Products/AddProducts";
import HomeSlideForm from "../pages/HomeSliderBanner/HomeSlideForm";
import AddCategoryForm from "../pages/Category/AddCategoryForm";
import AddSubCatList from "../pages/subCategory/AddSubCatList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// create context
export const MyContext = createContext();

// provider component
const MyContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  return (
    <MyContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        isLoggedIn,
        setisLoggedIn,
        isOpenFullScreenPanel,
        setIsOpenFullScreenPanel,

        //toaster message
        openAlertBox,
      }}
    >
      {children}

      <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={() =>
          setIsOpenFullScreenPanel({
            open: false,
          })
        }
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() =>
                setIsOpenFullScreenPanel({
                  open: false,
                })
              }
              aria-label="close"
            >
              <IoMdClose className="text-gray-800" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className="text-gray-800">
                {isOpenFullScreenPanel?.model}
              </span>
            </Typography>
          </Toolbar>
        </AppBar>

        {isOpenFullScreenPanel?.model === "Add Product" && <AddProducts />}

        {isOpenFullScreenPanel?.model === "Add Home Slide" && <HomeSlideForm />}

        {isOpenFullScreenPanel?.model === "Add New Category" && (
          <AddCategoryForm />
        )}

        {isOpenFullScreenPanel?.model === "Add New Sub Category" && (
          <AddSubCatList />
        )}
      </Dialog>

      <Toaster />
    </MyContext.Provider>
  );
};

export default MyContextProvider;
