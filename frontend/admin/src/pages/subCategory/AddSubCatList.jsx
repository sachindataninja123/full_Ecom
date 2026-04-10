import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";
import { FaRegImages } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddSubCatList = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Wireless Headphones",
    },
  ]);

  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
  });

  const handleRemove = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white m-4 rounded-xl p-6 shadow-md">
      <h1 className="text-xl font-semibold mb-6">
        Add New Sub Category
      </h1>

      {/* 🔥 Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        
        {/* Parent Category */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Parent Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Sub Category Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sub Category Name
          </label>
          <input
            type="text"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            placeholder="Enter sub category name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 🔥 Image Upload */}
      <h2 className="text-md font-medium mb-2">
        Sub Category Images
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        
        {/* Upload Box */}
        <div className="border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all rounded-lg h-36 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 relative">
          <FaRegImages className="text-[35px] text-gray-500 mb-2" />
          <p className="text-sm text-gray-600">Upload Image</p>

          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Preview Images */}
        {images.map((item) => (
          <div
            key={item.id}
            className="relative h-36 w-full rounded-md overflow-hidden group"
          >
            <LazyLoadImage
              src={item.url}
              alt={item.alt}
              effect="blur"
              className="w-full h-full object-cover"
            />

            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 
              opacity-0 group-hover:opacity-100 transition"
            >
              <RxCross2 size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 Submit Button */}
      <div className="sticky bottom-0 mt-8 pt-4 bg-white">
        <Button
          variant="contained"
          className="w-full flex items-center justify-center gap-2"
        >
          <FaCloudUploadAlt size={20} />
          Publish and Submit
        </Button>
      </div>
    </div>
  );
};

export default AddSubCatList;