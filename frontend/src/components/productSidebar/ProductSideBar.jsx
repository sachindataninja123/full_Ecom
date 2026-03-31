import React from "react";
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";

const ProductSideBar = () => {
  return (
    <aside className="sideBar">
      <div className="box">
        <h3 className="mb-3 text-[18px] text-gray-800 font-semibold">Shop By Categories </h3>
        <CategoryCollapse />
      </div>
    </aside>
  );
};

export default ProductSideBar;
