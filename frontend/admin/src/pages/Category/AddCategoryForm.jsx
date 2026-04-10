import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";
import { FaRegImages } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategoryForm = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Wireless Headphones",
    },
  ]);

  const handleRemove = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white m-4 rounded-lg p-5 shadow-md">
      <h1 className="text-[20px] font-semibold mb-4">
        Media & Category Images
      </h1>

      <div className="mb-5 w-[40%]">
        <label className="label">Category Name</label>
        <input type="text" className="input" />
      </div>

      <h1 className="mb-1">Category Images</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {/* Upload */}
        <div className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all rounded-lg h-36 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 relative">
          <FaRegImages className="text-[35px] text-gray-500 mb-2" />
          <p className="text-md text-gray-600 ">Upload Category</p>

          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Images */}
        {images.map((item) => (
          <div
            key={item.id}
            className="relative h-37 w-full rounded-md overflow-hidden group"
          >
            <LazyLoadImage
              src={item.url}
              alt={item.alt}
              effect="blur"
              className="w-full h-full object-cover"
            />

            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-2 right-2 z-50 bg-red-600 text-white rounded-full p-1 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 cursor-pointer"
            >
              <RxCross2 size={14} />
            </button>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 mt-7 shadow-md">
        <Button className="btn-blue w-full flex items-center justify-center gap-2">
          <FaCloudUploadAlt size={20} />
          Publish and Submit
        </Button>
      </div>
    </div>
  );
};

export default AddCategoryForm;
