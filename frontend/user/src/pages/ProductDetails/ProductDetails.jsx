import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox/QtyBox";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import ProductTabs from "../../components/ProductTabs/ProductsTab";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition-all"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition-all"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition-all"
            >
              Rajasthani Suit
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[35%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pt-2 pr-1">
            <ProductInfo
              sizes={sizes}
              productActionIndex={productActionIndex}
              setProductActionIndex={setProductActionIndex}
            />
          </div>
        </div>

        <div className="container pt-10">
          <ProductTabs />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
