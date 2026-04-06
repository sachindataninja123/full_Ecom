import React from "react";
import ProductListingPage from "../../components/productListingPage/ProductListingPage";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";


const ProductListing = () => {
  return (
    <div className="py-5 pb-0">
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
          <div className="sidebarWrapper w-full h-full bg-white ">
            <ProductListingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
