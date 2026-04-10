import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../../context/MyContext";

const SubCatList = () => {
  const { setIsOpenFullScreenPanel } = useContext(MyContext);

  const [data] = useState([
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      subCategories: ["Headphones", "Phones", "Cables"],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Fashion",
      subCategories: ["Shoes", "T-Shirts", "Jeans"],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Accessories",
      subCategories: ["Watches", "Bags"],
    },
     {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      subCategories: ["Headphones", "Phones", "Cables"],
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Fashion",
      subCategories: ["Shoes", "T-Shirts", "Jeans"],
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Accessories",
      subCategories: ["Watches", "Bags"],
    },
  ]);

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-gray-800">
          Sub Category List
        </h1>

        <Button
          variant="contained"
          className="flex items-center gap-2"
          onClick={() =>
            setIsOpenFullScreenPanel({
              open: true,
              model: "Add New Sub Category",
            })
          }
        >
          <FaPlus />
          Add Sub Category
        </Button>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-225">
            {/* Header */}
            <table className="w-full text-sm table-fixed">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
                <tr>
                  <th className="w-15 text-center px-4">
                    <Checkbox size="small" />
                  </th>
                  <th className="w-40 px-4 py-6 text-left">Image</th>
                  <th className="w-45 px-4 py-6 text-left">
                    Category
                  </th>
                  <th className="w-88 px-4 py-6 text-left">
                    Sub Categories
                  </th>
                  <th className="px-4 py-6 text-left">Actions</th>
                </tr>
              </thead>
            </table>

            {/* Body */}
            <div className="max-h-100 overflow-y-auto mt-2">
              <table className="w-full text-sm table-fixed border-separate border-spacing-y-2">
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white shadow-sm hover:shadow-md transition"
                    >
                      {/* Checkbox */}
                      <td className="w-15 text-center px-4 align-middle">
                        <Checkbox size="small" />
                      </td>

                      {/* Image */}
                      <td className="w-40 px-4 py-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>

                      {/* Category */}
                      <td className="w-45 px-4 py-3 font-medium text-gray-800">
                        {item.category}
                      </td>

                      {/* Sub Categories */}
                      <td className="w-88 px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {item.subCategories.map((sub, i) => (
                            <span
                              key={i}
                              className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Tooltip title="Edit">
                            <Button className="min-w-0! p-2! border rounded-full!">
                              <BiEditAlt size={18} />
                            </Button>
                          </Tooltip>

                          <Tooltip title="Delete">
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

        {/* Pagination */}
        <div className="flex justify-end p-4">
          <Pagination count={5} color="primary" />
        </div>
      </div>
    </div>
  );
};

export default SubCatList;