import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import { MyContext } from "../../context/MyContext";

const HomeSliderBanner = () => {
  const { setIsOpenFullScreenPanel } = useContext(MyContext);

  const [banners] = useState([
    {
      id: "B001",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: "B002",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: "B001",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: "B002",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: "B001",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: "B002",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: "B001",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: "B002",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: "B001",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: "B002",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
  ]);

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Home Slider Banner</h1>

        <Button
          variant="contained"
          className="flex items-center gap-2"
          onClick={() =>
            setIsOpenFullScreenPanel({
              open: true,
              model: "Add Home Slide",
            })
          }
        >
          <FaPlus />
          Add Slide
        </Button>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          {/* Header */}
          <table className="w-full text-sm table-fixed">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
              <tr>
                <th className="w-17.5 text-center px-4">
                  <Checkbox size="small" />
                </th>
                <th className="w-75 px-4 py-6 text-left">Preview</th>
                <th className="px-4 py-6 text-left">Actions</th>
              </tr>
            </thead>
          </table>

          {/* Body */}
          <div className="max-h-100 overflow-y-auto mt-2">
            <table className="w-full text-sm table-fixed border-separate border-spacing-y-2">
              <tbody>
                {banners.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white shadow-sm hover:shadow-md transition"
                  >
                    {/* Checkbox */}
                    <td className="w-17.5 text-center px-4 align-middle">
                      <Checkbox size="small" />
                    </td>

                    {/* Image */}
                    <td className="w-75 px-4 py-3">
                      <div className="w-55 h-22.5 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
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

                        <Tooltip title="View">
                          <Button className="min-w-0! p-2! border rounded-full!">
                            <MdOutlineRemoveRedEye size={18} />
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

        {/* Pagination */}
        <div className="flex justify-end p-4">
          <Pagination count={5} color="primary" />
        </div>
      </div>
    </div>
  );
};

export default HomeSliderBanner;
