import React from "react";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import QtyBox from "../QtyBox/QtyBox";

const ProductInfo = ({ sizes, productActionIndex, setProductActionIndex }) => {
  return (
    <div className="productContent w-full pt-3 pr-7">
      {/* 🏷️ Title */}
      <h1 className="text-[20px] font-semibold text-gray-800 leading-6 line-clamp-2">
        Yuan Women's Rayon Floral Print Angrakha Kurti Pant Set | Kurta Suit Set
        for Women
      </h1>

      {/* Brand */}
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

      {/* 💰 Price */}
      <div className="flex items-center gap-3 mt-3">
        <span className="text-2xl font-bold text-gray-900">₹799</span>
        <span className="text-gray-500 line-through">₹1,999</span>
        <span className="text-green-600 font-semibold">60% off</span>
      </div>

      {/* 🚚 Delivery */}
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          eaque, culpa consequuntur quis repellendus labore. Magni corporis
          adipisci iste vel esse dolore ratione, sapiente perferendis temporibus
          minima distinctio in omnis.
        </p>
      </div>

      {/* 📏 Sizes */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Select Size</h3>

        <div className="flex gap-2">
          {sizes.map((size, idx) => (
            <Button
              key={idx}
              onClick={() => setProductActionIndex(idx)}
              className={`min-w-10! min-h-8! border! ${
                productActionIndex === idx ? "bg-[#ff5252]! text-white!" : ""
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-4">
        <QtyBox />
      </div>

      {/* 🛒 Buttons */}
      <div className="flex gap-4 mt-7">
        <button className="bg-[#ff5252] text-white px-7 py-2 rounded-md font-semibold hover:bg-orange-600 flex items-center gap-2">
          <IoCartOutline size={23} />
          Add to Cart
        </button>

        <button className="bg-[#ff5252] text-white px-8 py-2 rounded-md font-semibold hover:bg-orange-600">
          Buy Now
        </button>
      </div>

      {/* ❤️ Wishlist */}
      <div className="mt-3">
        <p className="text-gray-500 text-sm font-semibold flex items-center gap-1 cursor-pointer link">
          Add To Wishlist <FaRegHeart />
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
