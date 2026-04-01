import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import IconButton from "@mui/material/IconButton";

const ProductBox = ({
  id,
  img,
  name,
  brand,
  price,
  oldPrice,
  rating,
  discount,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="productBox rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image */}
        <div className="group imgWrapper relative w-full overflow-hidden rounded-t-md">
          <Link to="/">
            {/* First Image */}
            <img
              src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/q/d/d/free-gadwal-fashion-club-collection-unstitched-original-imagydunjdm6r384.jpeg?q=90"
              className="w-full h-63 object-cover transition-all duration-300 group-hover:opacity-0"
              alt={name}
            />

            {/* Second Image (Hover Image) */}
            <img
              src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
              className="w-full h-63 object-cover absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              alt={name}
            />
          </Link>

          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-lg">
              -50%
            </span>
          )}

          {/* Actions */}
          <div className="actions absolute -top-50 right-3 z-50 flex flex-col gap-2 transition-all duration-300 group-hover:top-4 opacity-0 group-hover:opacity-100">
            <button className="w-10 h-10 rounded-full bg-white text-black shadow-sm flex items-center justify-center hover:text-white hover:bg-[#ff5252] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">
              <MdOutlineZoomOutMap size={19} />
            </button>

            <button className="w-10 h-10 rounded-full bg-white text-black shadow-sm flex items-center justify-center hover:text-white hover:bg-[#ff5252] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">
              <IoIosGitCompare size={19} />
            </button>

            <button className="w-10 h-10 rounded-full bg-white text-black shadow-sm flex items-center justify-center hover:text-white hover:bg-[#ff5252] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">
              <FaRegHeart size={18} />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="info p-3 py-3 bg-[#f1f1f1]">
          <h6 className="text-[13px] font-semibold text-gray-500 uppercase hover:text-blue-400 transition-all">
            <Link to="/">Anouk</Link>
          </h6>
          <h3 className="text-[14px] text-black font-semibold mt-1 line-clamp-2 link transition-all">
            <Link to="/">Designer Party Wear Saree</Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-400 text-[20px]">★★★★☆</span>
            <span className="text-gray-400 text-[12px]">(195)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[18px] font-bold text-[#ff5252]">
              ₹1500
            </span>
            {oldPrice && (
              <span className="text-[15px] font-medium text-gray-600 line-through">
                ₹1800
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
