import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import SearchBox from "../../components/SearchBox/SearchBox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Users = () => {
  const [users] = useState([
    {
      id: "U001",
      name: "Sachin Sharma",
      email: "sachin@gmail.com",
      phone: "+91 9876543210",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Active",
    },
    {
      id: "U002",
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "+91 9123456780",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "Inactive",
    },
    {
      id: "U003",
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "+91 9988776655",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "Active",
    },
     {
      id: "U004",
      name: "Rachin Sharma",
      email: "sachin@gmail.com",
      phone: "+91 9876543210",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Active",
    },
    {
      id: "U005",
      name: "Shiya Verma",
      email: "rahul@gmail.com",
      phone: "+91 9123456780",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "Inactive",
    },
    {
      id: "U006",
      name: "Mohan Singh",
      email: "priya@gmail.com",
      phone: "+91 9988776655",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "Active",
    },
  ]);

  return (
    <div className="card my-1 bg-white shadow-md sm:rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Users List</h1>

        <div className="w-[40%]">
          <SearchBox />
        </div>
      </div>

      {/* Table */}
      <div className="p-3">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <div className="max-h-[60vh] overflow-y-auto">
              <table className="w-full min-w-175 text-sm">
                {/* Header */}
                <thead className="sticky top-0 bg-gray-50 z-10">
                  <tr className="border-b border-gray-200">
                    <th className="w-15 text-center px-4 py-3">
                      <div className="flex items-center justify-center">
                        <Checkbox {...label} size="small" />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">
                      User
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">
                      Status
                    </th>
                   
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-3">
                        <Checkbox {...label} size="small" />
                      </td>

                      {/* User Info */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.image}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-400">{user.id}</p>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-4 py-3 text-gray-600">{user.email}</td>

                      {/* Phone */}
                      <td className="px-4 py-3 text-gray-600">{user.phone}</td>

                      {/* Status */}
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-500"
                          }`}
                        >
                          {user.status}
                        </span>
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
        <Pagination count={5} color="primary" />
      </div>
    </div>
  );
};

export default Users;
