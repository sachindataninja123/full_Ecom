import React from "react";
import ProductSideBar from "../productSidebar/ProductSideBar";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductListing = () => {
  return (
    <div className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

     <div className="bg-white p-2 mt-4">
       <div className="container flex gap-3">
        <div className="sidebarWrapper w-[20%] h-full bg-white ">
          <ProductSideBar />
        </div>
      </div>
     </div>
    </div>
  );
};

export default ProductListing;
