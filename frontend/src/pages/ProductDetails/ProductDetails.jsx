import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox/QtyBox";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import ProductTabs from "../../components/ProductTabs/ProductsTab";

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
            {/* 🏷️ Title */}
            <h1 className="text-[20px] font-semibold text-gray-800 leading-6 line-clamp-2">
              Yuan Women's Rayon Floral Print Angrakha Kurti Pant Set | Kurta
              Suit Set for Women
            </h1>

            {/* Brand  */}
            <div className="mt-2">
              <span className="font-medium">
                Brand : <span className="text-gray-700">Yuvan</span>
              </span>
            </div>

            {/* ⭐ Rating */}
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded">
                4.3 ★
              </span>
              <span className="text-gray-500 text-sm">
                (2,145 ratings & 320 reviews)
              </span>
            </div>

            {/* 💰 Price Section */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-bold text-gray-900">₹799</span>
              <span className="text-gray-500 line-through">₹1,999</span>
              <span className="text-green-600 font-semibold">60% off</span>
            </div>

            {/* 🚚 Delivery Info */}
            <div>
              <p className="text-gray-600">
                In Stock :{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </p>
              <p className="text-md font-medium text-gray-600 mt-2">
                Free delivery by Tomorrow
              </p>
            </div>

            {/* 📄 Description */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Description</h3>
              <p className="text-gray-600 text-sm mt-1 leading-5">
                This stylish Angrakha Kurti Pant Set is crafted from premium
                rayon fabric, offering comfort and elegance. Perfect for casual
                outings, festive wear, or office styling. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Reprehenderit modi asperiores
                accusantium odio delectus eum in adipisci!
              </p>
            </div>

            {/* 📏 Size Options */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Select Size</h3>

              <div className="flex gap-2">
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    onClick={() => setProductActionIndex(index)}
                    className={`min-w-10! min-h-8! border! ${
                      productActionIndex === index
                        ? "bg-[#ff5252]! text-white!"
                        : ""
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Box */}
            <div className="">
              <QtyBox />
            </div>

            {/* 🛒 Buttons */}
            <div className="flex gap-4 mt-7">
              <button className="bg-[#ff5252] transition-all cursor-pointer text-white px-7 py-2 rounded-md font-semibold hover:bg-orange-600 flex items-center justify-center gap-2">
                <IoCartOutline size={23} />
                Add to Cart
              </button>
              <button className="bg-[#ff5252] transition-all cursor-pointer text-white px-8 py-2 rounded-md font-semibold hover:bg-orange-600">
                Buy Now
              </button>
            </div>

            <div className="mt-1">
              <p className="text-gray-500 text-sm font-semibold flex items-center  gap-1 link transition-all mt-3 cursor-pointer">
                Add To Wishlist <FaRegHeart />
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex gap-8">
           <ProductTabs />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
