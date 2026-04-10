
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/uploadBox/UploadBox";

const AddProducts = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setSubProductCat] = useState("");
  const [productFeatured, setproductFeatured] = useState("");
  const [productRams, setproductRams] = useState("");
  const [productWeights, setproductWeights] = useState("");
  const [productSize, setproductSize] = useState("");

  return (
    <div className="h-screen flex flex-col bg-[#dedddd]">
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Form Section */}
        <section className="w-full bg-white rounded-lg shadow-md p-5">
          <h1 className="text-[20px] font-semibold mb-4">
            Add Product Details
          </h1>

          <form className="space-y-4">

            <div>
              <label className="label">Product Name</label>
              <input type="text" className="input" />
            </div>

            <div>
              <label className="label">Product Description</label>
              <textarea className="textarea" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label">Category</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productCat}
                  onChange={(e) => setProductCat(e.target.value)}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                  <MenuItem value="beauty">Beauty</MenuItem>
                  <MenuItem value="wellness">Wellness</MenuItem>
                </Select>
              </div>

              <div>
                <label className="label">Sub Category</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productSubCat}
                  onChange={(e) => setSubProductCat(e.target.value)}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="men">Men</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
                  <MenuItem value="kids">Kids</MenuItem>
                </Select>
              </div>

              <div>
                <label className="label">Price</label>
                <input type="number" className="input" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label">Old Price</label>
                <input type="number" className="input" />
              </div>

              <div>
                <label className="label">Featured</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productFeatured}
                  onChange={(e) => setproductFeatured(e.target.value)}
                >
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Select>
              </div>

              <div>
                <label className="label">Stock</label>
                <input type="number" className="input" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label">Brand</label>
                <input type="text" className="input" />
              </div>

              <div>
                <label className="label">Discount</label>
                <input type="number" className="input" />
              </div>

              <div>
                <label className="label">RAM</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productRams}
                  onChange={(e) => setproductRams(e.target.value)}
                >
                  <MenuItem value="4gb">4GB</MenuItem>
                  <MenuItem value="8gb">8GB</MenuItem>
                  <MenuItem value="16gb">16GB</MenuItem>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label">Weight</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productWeights}
                  onChange={(e) => setproductWeights(e.target.value)}
                >
                  <MenuItem value="2kg">2KG</MenuItem>
                  <MenuItem value="5kg">5KG</MenuItem>
                </Select>
              </div>

              <div>
                <label className="label">Size</label>
                <Select
                  size="small"
                  className="w-full"
                  value={productSize}
                  onChange={(e) => setproductSize(e.target.value)}
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                </Select>
              </div>

              <div>
                <label className="label">Rating</label>
                <Rating defaultValue={2.5} precision={0.5} />
              </div>
            </div>

          </form>
        </section>

        {/* Upload Section */}
        <UploadBox multiple={true} />

      </div>

      {/* Fixed Button */}
      <div className="sticky bottom-0 bg-white p-4 border-t shadow-md">
        <Button className="btn-blue w-full flex items-center justify-center gap-2">
          <FaCloudUploadAlt size={20} />
          Publish and Submit
        </Button>
      </div>
    </div>
  );
};

export default AddProducts;