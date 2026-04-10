import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import UploadBox from "../../components/uploadBox/UploadBox";

const AddProducts = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setSubProductCat] = useState("");
  const [productFeatured, setproductFeatured] = useState("");
  const [productRams, setproductRams] = useState("");
  const [productWeights, setproductWeights] = useState("");
  const [productSize, setproductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeSubProductCat = (event) => {
    setSubProductCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setproductFeatured(event.target.value);
  };

  const handleChangeProductWeights = (event) => {
    setproductWeights(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setproductRams(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setproductSize(event.target.value);
  };

  return (
    <>
      <div className="bg-[#dedddd]">
        <section className="w-[97%] mx-auto shadow-lg bg-[#ffffff] rounded-md mt-3">
          <h1 className="px-3 pt-3 font-semibold text-gray-800 text-[20px] ">
            Add Product Details
          </h1>
          <form action="" className="form p-5">
            <div className="grid grid-cols-1 mb-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full h-11 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6c6c6c]  focus:border-[#6c6c6c] rounded-sm px-3 text-md transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mb-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Description
                </label>

                <textarea
                  type="text"
                  placeholder="Enter product Description"
                  className="w-full h-30 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6c6c6c]  focus:border-[#6c6c6c] rounded-sm px-3 py-2 text-md transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mb-4 gap-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productCatDrop"
                  size="small"
                  className="w-full"
                  value={productCat}
                  label="Category"
                  onChange={handleChangeProductCat}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Beauty</MenuItem>
                  <MenuItem value={30}>Wellness</MenuItem>
                </Select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Sub Category
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productSubCatDrop"
                  size="small"
                  className="w-full"
                  value={productSubCat}
                  label="Sub Category"
                  onChange={handleChangeSubProductCat}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                  <MenuItem value={30}>Girls</MenuItem>
                  <MenuItem value={40}>Kids</MenuItem>
                </Select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Price
                </label>

                <input
                  type="number"
                  placeholder="Enter Price"
                  className="w-full h-10 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500 rounded-sm px-3 text-md transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mb-4 gap-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Old Price
                </label>

                <input
                  type="number"
                  placeholder="Enter Old Price"
                  className="w-full h-10 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500 rounded-sm px-3 text-md transition-all"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Is Featured?
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productfeatured"
                  size="small"
                  className="w-full"
                  value={productFeatured}
                  label="Product Featured"
                  onChange={handleChangeProductFeatured}
                >
                  <MenuItem value={10}>True</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Stock
                </label>

                <input
                  type="number"
                  placeholder="Enter Stock"
                  className="w-full h-10 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500 rounded-sm px-3 text-md transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mb-4 gap-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Brand
                </label>

                <input
                  type="text"
                  placeholder="Enter Brand"
                  className="w-full h-10 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500 rounded-sm px-3 text-md transition-all"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Discount
                </label>

                <input
                  type="number"
                  placeholder="Enter Discount"
                  className="w-full h-10 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500  focus:border-blue-500 rounded-sm px-3 text-md transition-all"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product RAMs
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productfeatured"
                  size="small"
                  className="w-full"
                  value={productRams}
                  label="Product Featured"
                  onChange={handleChangeProductRams}
                >
                  <MenuItem value={10}>2GB</MenuItem>
                  <MenuItem value={20}>4GB</MenuItem>
                  <MenuItem value={30}>6GB</MenuItem>
                  <MenuItem value={40}>8GB</MenuItem>
                  <MenuItem value={50}>12GB</MenuItem>
                  <MenuItem value={60}>16GB</MenuItem>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 mb-4 gap-4">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Weights
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productfeatured"
                  size="small"
                  className="w-full"
                  value={productWeights}
                  label="Product Featured"
                  onChange={handleChangeProductWeights}
                >
                  <MenuItem value={10}>2KG</MenuItem>
                  <MenuItem value={20}>4KG</MenuItem>
                  <MenuItem value={30}>5KG</MenuItem>
                  <MenuItem value={40}>6KG</MenuItem>
                </Select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Size
                </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="productSize"
                  size="small"
                  className="w-full"
                  value={productSize}
                  label="Product Featured"
                  onChange={handleChangeProductSize}
                >
                  <MenuItem value={10}>S</MenuItem>
                  <MenuItem value={20}>M</MenuItem>
                  <MenuItem value={30}>L</MenuItem>
                  <MenuItem value={40}>XL</MenuItem>
                  <MenuItem value={50}>XXL</MenuItem>
                  <MenuItem value={60}>XXXL</MenuItem>
                </Select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-1">
                  Product Rating
                </label>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className="col bg-[#dedddd]">
        <div className="">
          <UploadBox multiple={true} />
        </div>
      </div>
    </>
  );
};

export default AddProducts;
