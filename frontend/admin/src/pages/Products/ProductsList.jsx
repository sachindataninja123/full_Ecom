import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../../components/Progress/ProgressBar";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineCloudUpload } from "react-icons/ai";
import SearchBox from "../../components/SearchBox/SearchBox";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

const ProductsList = () => {
  const navigate = useNavigate();
  const [categotyFilter, setCategoryFilter] = useState("");

  const handleChangeCatFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const [products] = useState([
    {
      id: "P001",
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
      category: "Electronics",
      subCategory: "Audio",
      price: 2500,
      sales: 120,
    },
    {
      id: "P002",
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
      category: "Electronics",
      subCategory: "Wearables",
      price: 3800,
      sales: 95,
    },
    {
      id: "P003",
      name: "Gaming Keyboard",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=100",
      category: "Accessories",
      subCategory: "Computer",
      price: 3200,
      sales: 60,
    },
    {
      id: "P004",
      name: "Running Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
      category: "Fashion",
      subCategory: "Footwear",
      price: 2200,
      sales: 150,
    },
     {
      id: "P001",
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
      category: "Electronics",
      subCategory: "Audio",
      price: 2500,
      sales: 120,
    },
    {
      id: "P002",
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
      category: "Electronics",
      subCategory: "Wearables",
      price: 3800,
      sales: 95,
    },
    {
      id: "P003",
      name: "Gaming Keyboard",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=100",
      category: "Accessories",
      subCategory: "Computer",
      price: 3200,
      sales: 60,
    },
    {
      id: "P004",
      name: "Running Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
      category: "Fashion",
      subCategory: "Footwear",
      price: 2200,
      sales: 150,
    },
  ]);

  return (
    <>
      {/* Header */}
      <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
        <h1 className="font-bold text-[25px] text-gray-700">Products</h1>

        <div className="flex items-center gap-4">
          <Button className="btn-green flex items-center gap-2">
            <AiOutlineCloudUpload size={22} /> Export
          </Button>

          <Button
            className="btn-blue flex items-center gap-2"
            onClick={() => navigate("/admin/products/add")}
          >
            <FaPlus size={20} />
            Add Product
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="card my-3 bg-white shadow-md sm:rounded-lg">
        {/* Filters */}
        <div className="flex items-center w-full py-3 px-5 justify-between mb-3">
          <div className="w-[20%]">
            <h4 className="font-semibold text-[16px] mb-2 text-gray-600">
              Category By:
            </h4>
            <Select
              className="w-full"
              size="small"
              value={categotyFilter}
              onChange={handleChangeCatFilter}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="w-[25%]">
            <SearchBox />
          </div>
        </div>

        {/* Table */}
        <div className="p-3">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <div className="max-h-[60vh] overflow-y-auto">
                <table className="w-full min-w-225 border-collapse text-sm">
                  
                  {/* Sticky Header */}
                  <thead className="sticky top-0 bg-gray-50 z-10">
                    <tr className="border-b border-gray-200">
                      {[
                        <Checkbox {...label} size="small" />,
                        "Product",
                        "Category",
                        "Sub Category",
                        "Price",
                        "Sales",
                        "Action",
                      ].map((h, i) => (
                        <th
                          key={i}
                          className="text-left text-[12px] uppercase text-gray-500 font-medium px-4 py-3 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Scrollable Body */}
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">
                          <Checkbox {...label} size="small" />
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Link to="/">
                              <img
                                src={product.image}
                                alt=""
                                className="w-12 h-12 rounded-md object-cover"
                              />
                            </Link>
                            <div>
                              <p className="font-medium text-gray-900">
                                {product.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {product.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-gray-600">
                          {product.category}
                        </td>

                        <td className="px-4 py-3 text-gray-600">
                          {product.subCategory}
                        </td>

                        <td className="px-4 py-3 text-blue-700 font-medium">
                          ₹{product.price.toLocaleString("en-IN")}
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-gray-500 font-semibold">
                            {product.sales} sold
                          </span>
                          <ProgressBar value={40} type="success" />
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Tooltip title="Edit Product">
                              <Button className="min-w-0! p-2! border rounded-full!">
                                <BiEditAlt size={18} />
                              </Button>
                            </Tooltip>

                            <Tooltip title="View Product">
                              <Button className="min-w-0! p-2! border rounded-full!">
                                <MdOutlineRemoveRedEye size={18} />
                              </Button>
                            </Tooltip>

                            <Tooltip title="Delete Product">
                              <Button className="min-w-0! p-2! border rounded-full! text-red-500!">
                                <MdDelete size={18} />
                              </Button>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-end p-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default ProductsList;