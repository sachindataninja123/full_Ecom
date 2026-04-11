import React, { createContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ProductZoom from "../components/ProductZoom/ProductZoom";
import { IoMdClose } from "react-icons/io";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import CartPanel from "../components/CartPanel/CartPanel";
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi } from "../utils/api";

export const ProductviewContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = ({ children }) => {
  // ✅ Modal state
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const [userData, setUserData] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  // ✅ Product state
  const [productActionIndex, setProductActionIndex] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  // ✅ Review state (important)
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // ✅ Functions
  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const addReview = (review) => {
    setReviews((prev) => [review, ...prev]);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token !== undefined && token !== null && token !== "") {
      setIsLoggedIn(true);

      fetchDataFromApi("/api/user/user-details").then((res) => {
        // console.log(res);
        setUserData(res.data);
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  return (
    <ProductviewContext.Provider
      value={{
        // modal
        openProductDetailsModal,
        setOpenProductDetailsModal,
        handleClickOpenProductDetailsModal,
        handleCloseOpenProductDetailsModal,

        //toaster message
        openAlertBox,

        // product
        productActionIndex,
        setProductActionIndex,
        sizes,

        // reviews
        rating,
        setRating,
        reviews,
        addReview,

        //cart drawer
        setOpenCartPanel,

        //Auth Login
        isLoggedIn,
        setIsLoggedIn,

        // userData
        setUserData,
      }}
    >
      {children}

      <Toaster />

      {/* ✅ Modal UI */}
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        slots={{ transition: Transition }}
        keepMounted
        onClose={handleCloseOpenProductDetailsModal}
        className="productDetailsModel"
      >
        <DialogContent>
          <div className="flex items-start gap-7 w-full relative">
            {/* ❌ Close button */}
            <Button
              className="w-10! h-10! min-w-10! rounded-full! text-[#ff5252]! absolute! -top-1 -right-2 hover:bg-[#ff5252]! hover:text-white!"
              onClick={handleCloseOpenProductDetailsModal}
            >
              <IoMdClose size={20} />
            </Button>

            {/* Left */}
            <div className="w-[40%]">
              <ProductZoom />
            </div>

            {/* Right */}
            <div className="w-[60%]">
              <ProductInfo
                sizes={sizes}
                productActionIndex={productActionIndex}
                setProductActionIndex={setProductActionIndex}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* cart drawer */}
      <Drawer
        open={openCartPanel}
        onClose={toggleDrawer(false)}
        anchor="right"
        className="cart_panel"
      >
        <div className=" flex items-center justify-between p-5 border-b border-[rgba(0,0,0,0.2)]">
          <h4 className="font-semibold text-lg">Shopping Cart (1)</h4>
          <IoMdClose
            size={22}
            className="cursor-pointer hover:bg-[#ff5252] rounded-full transition-all flex items-center justify-center  hover:text-white"
            onClick={toggleDrawer(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </ProductviewContext.Provider>
  );
};

export default MyContext;
