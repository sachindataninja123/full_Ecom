import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";
import { FaRegImages } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

const HomeSlideForm = () => {
  const [banners, setBanners] = useState([
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

  const handleRemove = (id) => {
    setBanners(banners.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white m-4 rounded-lg p-5 shadow-md">
      <h1 className="text-[20px] font-semibold mb-4">Media & Banners</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {/* Upload */}
        <div className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all rounded-lg h-36 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 relative">
          <FaRegImages className="text-[35px] text-gray-500 mb-2" />
          <p className="text-md text-gray-600 ">Upload Banners</p>

          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Images */}
        {banners.map((item) => (
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

export default HomeSlideForm;
