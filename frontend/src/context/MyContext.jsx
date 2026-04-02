import React, { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ProductZoom from "../components/ProductZoom/ProductZoom";
import { IoMdClose } from "react-icons/io";
import ProductInfo from "../components/ProductInfo/ProductInfo";

export const ProductviewContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = ({ children }) => {
  // ✅ Modal state
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);

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

  return (
    <ProductviewContext.Provider
      value={{
        // modal
        openProductDetailsModal,
        setOpenProductDetailsModal,
        handleClickOpenProductDetailsModal,
        handleCloseOpenProductDetailsModal,


        // product
        productActionIndex,
        setProductActionIndex,
        sizes,

        // reviews
        rating,
        setRating,
        reviews,
        addReview,
      }}
    >
      {children}

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
    </ProductviewContext.Provider>
  );
};

export default MyContext;
