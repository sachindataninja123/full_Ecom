import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbSlideshow } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { TbCategory2 } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 w-[18%] h-full bg-white shadow-md border-r border-[rgba(0,0,0,0.2)] py-2 px-4">
      <div className="w-full py-1">
        <Link to="/">
          <img src="/logofably.png" className="w-40" alt="" />
        </Link>
      </div>

      <ul>
        <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <RxDashboard size={19} /> <span>Dashboard</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <TbSlideshow size={22} /> <span>Home Slides</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <LuUsers size={19} /> <span>Users</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <LiaProductHunt size={20} /> <span>Products</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <TbCategory2 size={23} /> <span>Category</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <IoBagCheckOutline size={20} /> <span>Orders</span>
          </Button>
        </li>

         <li>
          <Button className="w-full capitalize! justify-start! flex items-center  gap-3 text-[14px]! font-medium text-[rgba(0,0,0,0.8)]!">
            
            <IoLogOutOutline size={20} /> <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
