import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
        <div className="imgWrapper w-full overflow-hidden rounded-t-md">
          <img
            src={img}
            className="w-full h-61 object-cover hover:scale-105 transition-transform duration-300"
            alt={name}
          />
        </div>

        {/* Discount Badge */}
        {/* {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )} */}

        {/* Info */}
        <div className="info p-3 py-3 bg-[#f1f1f1]">
          <h6 className="text-[13px] font-semibold text-gray-500 uppercase hover:text-blue-400 transition-all">
            <Link to="/">{brand}</Link>
          </h6>
          <h3 className="text-[14px] text-black font-semibold mt-1 line-clamp-2 link transition-all">
            <Link to="/">{name}</Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-400 text-[20px]">★★★★☆</span>
            <span className="text-gray-400 text-[12px]">({rating})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[18px] font-bold text-[#ff5252]">₹{price}</span>
            {oldPrice && (
              <span className="text-[15px] font-medium text-gray-600 line-through">
                ₹{oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
