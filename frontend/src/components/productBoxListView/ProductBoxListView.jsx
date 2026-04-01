import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const ProductBoxListView = ({
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
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-3 flex gap-8  ">
      {/* LEFT IMAGE */}
      <div className="w-[28%] h-60 overflow-hidden relative rounded-md">
        <Link
          to={`/product/${id}`}
          className="w-55 h-57 shrink overflow-hidden rounded-md group relative"
        >
          <img
            src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/q/d/d/free-gadwal-fashion-club-collection-unstitched-original-imagydunjdm6r384.jpeg?q=90"
            alt={name}
            className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
          />

           {/* Second Image (Hover Image) */}
            <img
              src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
              className="w-full h-63 object-cover absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              alt={name}
            />

          {/* Discount */}

          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -50%
          </span>
        </Link>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-between items-start w-[70%] mt-2">
        {/* TOP */}
        <div>
          <h6 className="text-sm font-semibold text-gray-500 uppercase">
            AKOUNI
          </h6>

          <Link to={`/product/${id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-[#ff5252] transition-all line-clamp-2">
              Designer Party Wear Saree
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-400 text-lg">
              {"★".repeat(Math.floor(rating || 4))}
            </span>
            <span className="text-gray-500 text-sm">(195)</span>
          </div>

          {/* Description (optional) */}
          <p className="text-md text-gray-500 mt-1 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit
            architecto ipsum, libero perferendis harum vero veniam suscipit illo
            est eos assumenda doloribus enim recusandae.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between">
          {/* PRICE */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#ff5252]">₹1500</span>

            <span className="text-md text-gray-500 line-through">₹1900</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {/* ADD TO CART */}
          <div className="mt-3 rounded-md cursor-pointer">
            <button className="btn-org rounded-md cursor-pointer flex gap-3 items-center justify-center font-semibold hover:bg-[#222]! transition-all!">
              <IoCartOutline size={23} />Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBoxListView;
