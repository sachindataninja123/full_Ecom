import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogBox = () => {
  return (
    <div className="blogItem group">
      <div className="imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative ">
        <img
          src="https://images.pexels.com/photos/6207749/pexels-photo-6207749.jpeg"
          alt="blog image"
          className="w-full group-hover:scale-105 group-hover:rotate-1 transition-all relative"
        />

        <span className="flex items-center justify-center text-white absolute bottom-3.75 right-3.75 z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-semibold gap-1">
          <IoMdTime /> 5 APRIL,2023
        </span>
      </div>

      <div className="info py-4">
        <Link to="/" className="font-semibold text-[17px] text-black ">
          Lorem ipsum dolor sit amet.
        </Link>
        <p className="font-normal text-[14px] text-gray-700 mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          sapiente quia minima aspernatur veritatis quod?...
        </p>
        <Link to="/" className="link font-medium  transition-all underline">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default BlogBox;
