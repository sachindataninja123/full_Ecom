import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";

import { FaCloudUploadAlt } from "react-icons/fa";

const UploadBox = ({ multiple = false }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Wireless Headphones",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      alt: "Smart Watch",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      alt: "Laptop Computer",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      alt: "Running Shoes",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      alt: "Bluetooth Speaker",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      alt: "Gaming Mouse",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
      alt: "Smartphone Device",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      alt: "Digital Camera",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
      alt: "Backpack Bag",
    },
  ]);

  //  Remove image
  const handleRemove = (id) => {
    const filtered = images.filter((img) => img.id !== id);
    setImages(filtered);
  };

  return (
    <div className="bg-white w-[97%] mx-auto mt-4 rounded-lg p-5 shadow-sm">
      <h1 className="font-semibold text-gray-800 text-[20px] mb-4">
        Media & Images
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
        {/* Upload Box */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-38 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 hover:border-blue-400 transition-all relative">
          <FaRegImages className="text-[40px] text-gray-500 mb-2 pointer-events-none" />
          <p className="text-sm text-gray-600 font-medium pointer-events-none">
            Upload Image
          </p>

          <input
            type="file"
            multiple={multiple}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Images Preview */}
        {images.map((item) => (
          <div
            key={item.id}
            className="relative h-38 w-full  rounded-lg overflow-hidden border border-gray-200 group"
          >
            {/*  Delete Button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-1.5 right-1.5 z-50 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            >
              <RxCross2 size={16} className="text-white" />
            </button>

            <LazyLoadImage
              alt={item.alt}
              effect="blur"
              src={item.url}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      <div className="w-full mt-6">
        <Button
          type="submit"
          className="btn-blue w-full flex items-center justify-center gap-2"
        >
          <FaCloudUploadAlt size={21} />
          Publish and Submit
        </Button>
      </div>
    </div>
  );
};

export default UploadBox;
